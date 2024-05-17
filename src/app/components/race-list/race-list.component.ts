import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import { Race } from '../../models/race.model';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrl: './race-list.component.css'
})
export class RaceListComponent implements OnInit {

  race?: Race[];
  currentRace: Race = {};
  currentIndex = -1;
  title = '';

  constructor(private RaceService: RaceService) {}

  ngOnInit(): void {
    this.retrieveRace();
  }

  retrieveRace(): void {
    this.RaceService.getAll().subscribe({
      next: (data) => {
        this.race = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveRace();
    this.currentRace = {};
    this.currentIndex = -1;
  }

  setActiveRace(race: Race, index: number): void {
    this.currentRace = race;
    this.currentIndex = index;
  }

  removeAllRace(): void {
    this.RaceService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentRace = {};
    this.currentIndex = -1;

    this.RaceService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.race = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
