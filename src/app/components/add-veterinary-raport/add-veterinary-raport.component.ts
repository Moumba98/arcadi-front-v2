import { Component } from '@angular/core';
import { VeterinaryRaportService} from '../../services/veterinary-raport.service';
import { Veterinary_raport } from '../../models/veterinary_raport.model';

@Component({
  selector: 'app-add-veterinary-raport',
  templateUrl: './add-veterinary-raport.component.html',
  styleUrl: './add-veterinary-raport.component.css'
})
export class AddVeterinaryRaportComponent {

  veterinary_raport: Veterinary_raport = {
    date: '',
    detail: '',
    user_id: 0,
    animal_id : 0,
  };
  submitted = false;

  constructor(private VeterinaryRaportService: VeterinaryRaportService) {}

  saveVeterinary_raport(): void {
    const data = {
      date: this.veterinary_raport.date,
      detail: this.veterinary_raport.detail,
      user_id: this.veterinary_raport.user_id,
      animal_id: this.veterinary_raport.animal_id,

    };

    console.log("In my component" + data);

    this.VeterinaryRaportService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newVeterinary_raport(): void {
    this.submitted = false;
    this.veterinary_raport = {
      date: '',
      detail: '',
      user_id: 0,
      animal_id : 0,
    };
  }

}
