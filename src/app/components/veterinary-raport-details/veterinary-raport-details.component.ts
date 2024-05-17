import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../../models/tutorial.model';
import { VeterinaryRaportService } from '../../services/veterinary-raport.service';
import { Veterinary_raport } from '../../models/veterinary_raport.model';

@Component({
  selector: 'app-veterinary-raport-details',
  templateUrl: './veterinary-raport-details.component.html',
  styleUrl: './veterinary-raport-details.component.css'
})
export class VeterinaryRaportDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentVeterinary_raport: Veterinary_raport= {
    date: '',
    detail: '',
    user_id : 1,
    animal_id: 1
  };

  message = '';

  constructor(
    private VeterinaryRaportService: VeterinaryRaportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('veterinary_raport_id');
      if(id){
        this.getVeterinary_raport(id);
      }
    }
  }

  

  getVeterinary_raport(id: string): void {
    console.log("welcomeeeeeeeeeeeee");
    this.VeterinaryRaportService.get(id).subscribe({
      next: (data) => {
        this.currentVeterinary_raport = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateVeterinary_raport(): void {
    this.message = '';


    console.log(" this.currentVeterinary_raport",  this.currentVeterinary_raport)
    this.VeterinaryRaportService
      .update(this.currentVeterinary_raport.veterinary_raport_id, this.currentVeterinary_raport)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This veterinary-raport was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteVeterinary_raport(): void {
    this.VeterinaryRaportService.delete(this.currentVeterinary_raport.veterinary_raport_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/veterinary_raport_id']);
      },
      error: (e) => console.error(e)
    });
  }

}
