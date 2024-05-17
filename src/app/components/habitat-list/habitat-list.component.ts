import { Component,OnInit } from '@angular/core';
import { HabitatService } from '../../services/habitat.service';
import { Habitat } from '../../models/habitat.model';

@Component({
  selector: 'app-habitat-list',
  templateUrl: './habitat-list.component.html',
  styleUrl: './habitat-list.component.css'
})
export class HabitatListComponent implements OnInit {

  habitat?: Habitat[];
  currentHabitat: Habitat = {};
  currentIndex = -1;
  title = '';

  constructor(private HabitatService: HabitatService) {}

  ngOnInit(): void {
    this.retrieveHabitat();
  }

  retrieveHabitat(): void {
    this.HabitatService.getAll().subscribe({
      next: (data) => {
        this.habitat = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveHabitat();
    this.currentHabitat = {};
    this.currentIndex = -1;
  }

  setActiveHabitat(habitat: Habitat, index: number): void {
    this.currentHabitat = habitat;
    this.currentIndex = index;
  }

  removeAllHabitat(): void {
    this.HabitatService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentHabitat = {};
    this.currentIndex = -1;

    this.HabitatService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.habitat = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


}
