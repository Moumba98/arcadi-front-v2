import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitatService } from '../../services/habitat.service';
import { Habitat } from '../../models/habitat.model';


@Component({
  selector: 'app-habitat-details',
  templateUrl: './habitat-details.component.html',
  styleUrl: './habitat-details.component.css'
})
export class HabitatDetailsComponent implements OnInit  {

  @Input() viewMode = false;

  @Input() currentHabitat: Habitat = {
    name: '',
    description: '',
    habitat_comment: '',
  };

  message = '';

  constructor(
    private HabitatService: HabitatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('habitat_id');
      if(id){
        this.getHabitat(id);
      }
    }
  }

  getHabitat(id: string): void {
    this.HabitatService.get(id).subscribe({
      next: (data) => {
        this.currentHabitat = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateHabitat(): void {
    this.message = '';


    console.log(" this.currentHabitat",  this.currentHabitat)
    this.HabitatService
      .update(this.currentHabitat.habitat_id, this.currentHabitat)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Habitat was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteHabitat(): void {
    this.HabitatService.delete(this.currentHabitat.habitat_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/habitat']);
      },
      error: (e) => console.error(e)
    });
  }

}
