import { Component,OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent implements OnInit {

  role?: Role[];
  currentRole: Role = {};
  currentIndex = -1;
  title = '';

  constructor(private RoleService: RoleService) {}

  ngOnInit(): void {
    this.retrieveRole();
  }

  retrieveRole(): void {
    this.RoleService.getAll().subscribe({
      next: (data) => {
        this.role = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveRole();
    this.currentRole = {};
    this.currentIndex = -1;
  }

  setActiveRole(role: Role, index: number): void {
    this.currentRole = role;
    this.currentIndex = index;
  }

  removeAllRole(): void {
    this.RoleService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentRole = {};
    this.currentIndex = -1;

    this.RoleService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.role = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
