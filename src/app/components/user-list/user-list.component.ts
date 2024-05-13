import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.UserService.getAll().subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentUser = {};
    this.currentIndex = -1;
  }

  setActiveUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUser(): void {
    this.UserService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentUser = {};
    this.currentIndex = -1;

    this.UserService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
