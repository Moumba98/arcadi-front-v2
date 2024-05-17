import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';


@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentService: Service = {
    name: '',
    description: '',
  };

  message = '';

  constructor(
    private ServiceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('service_id');
      if(id){
        this.getService(id);
      }
    }
  }

  getService(id: string): void {
    this.ServiceService.get(id).subscribe({
      next: (data) => {
        this.currentService = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateService(): void {
    this.message = '';


    console.log(" this.currentService",  this.currentService)
    this.ServiceService
      .update(this.currentService.service_id, this.currentService)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Service was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteService(): void {
    this.ServiceService.delete(this.currentService.service_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/service']);
      },
      error: (e) => console.error(e)
    });
  }

}
