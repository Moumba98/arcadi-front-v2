import { Component , Input,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.css'
})
export class AnimalDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentAnimal: Animal = {
    first_name: '',
    etat: '',
    race_id : 1,
    habitat_id: 1
  };

  message = '';

  constructor(
    private AnimalService: AnimalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('animal_id');
      if(id){
        this.getAnimal(id);
      }
    }
  }

  getAnimal(id: string): void {
    this.AnimalService.get(id).subscribe({
      next: (data) => {
        this.currentAnimal = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateAnimal(): void {
    this.message = '';


    console.log(" this.currentAnimal",  this.currentAnimal)
    this.AnimalService
      .update(this.currentAnimal.animal_id, this.currentAnimal)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Animal was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteAnimal(): void {
    this.AnimalService.delete(this.currentAnimal.animal_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/animal']);
      },
      error: (e) => console.error(e)
    });
  }

}
