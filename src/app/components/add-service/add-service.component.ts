import { Component } from '@angular/core';
import { Service } from '../../models/service.model';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {

  service: Service = {
    name: '',
    description: '',
  };
  submitted = false;

  constructor(private ServiceService: ServiceService) {}

  saveService(): void {
    const data = {
      name: this.service.name,
      description : this.service.description,
    };

    console.log("In my component" + data);

    this.ServiceService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newService(): void {
    this.submitted = false;
    this.service = {
      name: '',
      description: '',
    };
  }

}
