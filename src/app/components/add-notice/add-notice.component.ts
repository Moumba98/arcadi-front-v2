import { Component } from '@angular/core';
import { Notice } from '../../models/notice.model';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrl: './add-notice.component.css'
})
export class AddNoticeComponent {

  notice: Notice = {
    pseudo: '',
    comment: '',
    isvisible : false,
  };
  submitted = false;

  constructor(private NoticeService: NoticeService) {}

  saveNotice(): void {
    const data = {
      pseudo: this.notice.pseudo,
      comment : this.notice.comment,
      isvisible : this.notice.isvisible,
    };

    console.log("In my component" + data);

    this.NoticeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newNotice(): void {
    this.submitted = false;
    this.notice = {
      pseudo: '',
    comment: '',
    isvisible : false,
    };
  }

}
