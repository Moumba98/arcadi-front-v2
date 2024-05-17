import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { VeterinaryRaportService} from '../../services/veterinary-raport.service';
import { Veterinary_raport } from '../../models/veterinary_raport.model';

@Component({
  selector: 'app-veterinary-raport-list',
  templateUrl: './veterinary-raport-list.component.html',
  styleUrl: './veterinary-raport-list.component.css'
})
export class VeterinaryRaportListComponent implements OnInit {

  Veterinary_raport?: Veterinary_raport[];
  currentVeterinary_raport: Veterinary_raport = {};
  currentIndex = -1;
  title = '';

  constructor(private VeterinaryRaportService: VeterinaryRaportService) {}

  ngOnInit(): void {
    this.retrieveVeterinary_raport();
  }

  retrieveVeterinary_raport(): void {
    this.VeterinaryRaportService.getAll().subscribe({
      next: (data) => {
        this.Veterinary_raport = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  log(val : any) : void{
    console.log("hhhhhhhhhhhhhh  " + val.detail);
  }

  refreshList(): void {
    this.retrieveVeterinary_raport();
    this.currentVeterinary_raport = {};
    this.currentIndex = -1;
  }

  setActiveVeterinary_raport(veterinary_raport: Veterinary_raport, index: number): void {
    this.currentVeterinary_raport = veterinary_raport;
    this.currentIndex = index;
  }

  removeAllVeterinary_raport(): void {
    this.VeterinaryRaportService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentVeterinary_raport = {};
    this.currentIndex = -1;

    this.VeterinaryRaportService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.Veterinary_raport = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
