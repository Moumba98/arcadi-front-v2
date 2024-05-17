import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role.model';


@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent {
  role: Role = {
    label: '',
  };
  submitted = false;

  constructor(private RoleService: RoleService) {}

  saveRole(): void {
    const data = {
      label: this.role.label,
    };

    console.log("In my component" + data);

    this.RoleService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }

  newRole(): void {
    this.submitted = false;
    this.role = {
      label: '',
    };
  }
}
