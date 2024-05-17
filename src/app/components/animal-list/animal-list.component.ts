import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal} from '../../models/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit {
  animal?: Animal[];
  currentAnimal: Animal = {};
  currentIndex = -1;
  title = '';

  constructor(private AnimalService: AnimalService) {}
  ngOnInit(): void {
    this.retrieveAnimal();
  }

  retrieveAnimal(): void {
    this.AnimalService.getAll().subscribe({
      next: (data) => {
        this.animal = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveAnimal();
    this.currentAnimal = {};
    this.currentIndex = -1;
  }

  setActiveAnimal(animal: Animal, index: number): void {
    this.currentAnimal = animal;
    this.currentIndex = index;
  }

  removeAllAnimal(): void {
    this.AnimalService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentAnimal = {};
    this.currentIndex = -1;

    this.AnimalService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.animal = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
