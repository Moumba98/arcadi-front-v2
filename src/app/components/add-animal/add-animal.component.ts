import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';


@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.css'
})
export class AddAnimalComponent {

  animal: Animal = {
    first_name: '',
    etat: '',
    race_id: 0,
    habitat_id : 0
  };
  submitted = false;

  constructor(private AnimalService : AnimalService) {}

  saveAnimal(): void {
    const data = {
      first_name: this.animal.first_name,
      etat: this.animal.etat,
      race_id: this.animal.race_id,
      habitat_id: this.animal.habitat_id,
    };

    console.log("In my component" + data);

    this.AnimalService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newAnimal(): void {
    this.submitted = false;
    this.animal = {
      first_name: '',
      etat: '',
      race_id: 0,
      habitat_id : 0
    };
  }

}
