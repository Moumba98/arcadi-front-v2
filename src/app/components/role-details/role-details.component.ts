import { Component,Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrl: './role-details.component.css'
})
export class RoleDetailsComponent implements OnInit  {

  @Input() viewMode = false;

  @Input() currentRole: Role = {
    role_id : '',
    label: '',
  };

  message = '';

  constructor(
    private RoleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('role_id');
      console.log(id);
      if(id){
        this.getRole(id);
      }
    }
  }

  getRole(id: string): void {
    this.RoleService.get(id).subscribe({
      next: (data) => {
        this.currentRole = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog:    " + value);
  }

  updateRole(): void {
    this.message = '';
    const data = {
     role_id : this.currentRole.role_id,
      label: this.currentRole.label,
    };


    console.log("this.currentRole", this.currentRole);

    this.RoleService
      .update(this.currentRole.role_id, data);
      /* .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Roles was updated successfully!';
        },
        error: (e) => console.error(e)
      }); */
  }

  deleteRole(): void {
    this.RoleService.delete(this.currentRole.role_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/role']);
      },
      error: (e) => console.error(e)
    });
  }

}
