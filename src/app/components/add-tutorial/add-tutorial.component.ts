import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  tutorial: User = {
    username: '',
    name: '',
    password: '',
    first_name : '',
    role_id : 0
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) {}

  saveTutorial(): void {
    const data = {
      username: this.tutorial.username,
      name: this.tutorial.name,
      password : this.tutorial.password,
      first_name : this.tutorial.first_name,
      role_id : this.tutorial.role_id
    };

    console.log("In my component" + data);

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      first_name: '',
      name: '',
      password: '',
      username : '',
      role_id : 0
    };
  }
}
