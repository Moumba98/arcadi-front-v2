import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit  {

  service?: Service[];
  currentService: Service = {};
  currentIndex = -1;
  title = '';

  constructor(private ServiceService: ServiceService) {}

  ngOnInit(): void {
    this.retrieveService();
  }

  retrieveService(): void {
    this.ServiceService.getAll().subscribe({
      next: (data) => {
        this.service = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveService();
    this.currentService = {};
    this.currentIndex = -1;
  }

  setActiveService(service: Service, index: number): void {
    this.currentService = service;
    this.currentIndex = index;
  }

  removeAllService(): void {
    this.ServiceService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentService = {};
    this.currentIndex = -1;

    this.ServiceService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.service = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
