import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user: User = {
    username: '',
    name: '',
    password: '',
    first_name : '',
    role_id : 0
  };
  submitted = false;

  constructor(private UserService: UserService) {}

  saveUser(): void {
    const data = {
      username: this.user.username,
      name: this.user.name,
      password : this.user.password,
      first_name : this.user.first_name,
      role_id : this.user.role_id
    };

    console.log("In my component" + data);

    this.UserService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      first_name: '',
      name: '',
      password: '',
      username : '',
      role_id : 0
    };
  }
}
