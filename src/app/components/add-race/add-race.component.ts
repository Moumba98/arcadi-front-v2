import { Component } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { Race } from '../../models/race.model';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrl: './add-race.component.css'
})
export class AddRaceComponent {

  race: Race = {
    label: '',
  };
  submitted = false;

  constructor(private RaceService: RaceService) {}

  saveRace(): void {
    const data = {
      label: this.race.label,
    };

    console.log("In my component" + data);

    this.RaceService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }

  newRace(): void {
    this.submitted = false;
    this.race = {
      label: '',
    };
  }

}
