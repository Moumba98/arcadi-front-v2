import { Component } from '@angular/core';
import { HabitatService } from '../../services/habitat.service';
import { Habitat } from '../../models/habitat.model';


@Component({
  selector: 'app-add-habitat',
  templateUrl: './add-habitat.component.html',
  styleUrl: './add-habitat.component.css'
})
export class AddHabitatComponent {

  habitat: Habitat = {
    name: '',
    description: '',
    habitat_comment : '',
  };
  submitted = false;

  constructor(private HabitatService: HabitatService) {}

  saveHabitat(): void {
    const data = {
      name: this.habitat.name,
      description : this.habitat.description,
      habitat_comment : this.habitat.habitat_comment,
    };

    console.log("In my component" + data);

    this.HabitatService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newHabitat(): void {
    this.submitted = false;
    this.habitat = {
      name: '',
      description: '',
      habitat_comment : '',
    };
  }

}
