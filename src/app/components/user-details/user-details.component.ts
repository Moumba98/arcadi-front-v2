import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../../models/tutorial.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentUser: User = {
    username: '',
    password: '',
    first_name: '',
    name : '',
    role_id : 1
  };

  message = '';

  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('user_id');
      if(id){
        this.getUser(id);
      }
    }
  }

  getUser(id: string): void {
    this.UserService.get(id).subscribe({
      next: (data) => {
        this.currentUser = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateUser(): void {
    this.message = '';


    console.log(" this.currentUser",  this.currentUser)
    this.UserService
      .update(this.currentUser.user_id, this.currentUser)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Users was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUser(): void {
    this.UserService.delete(this.currentUser.user_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      error: (e) => console.error(e)
    });
  }
}
