import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeService } from '../../services/notice.service';
import { Notice } from '../../models/notice.model';


@Component({
  selector: 'app-notice-details',
  templateUrl: './notice-details.component.html',
  styleUrl: './notice-details.component.css'
})
export class NoticeDetailsComponent  implements OnInit {

  @Input() viewMode = false;

  @Input() currentNotice: Notice = {
    pseudo: '',
    comment: '',
    isvisible: false,
  };

  message = '';

  constructor(
    private NoticeService: NoticeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('notice_id');
      if(id){
        this.getNotice(id);
      }
    }
  }

  getNotice(id: string): void {
    this.NoticeService.get(id).subscribe({
      next: (data) => {
        this.currentNotice = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updateNotice(): void {
    this.message = '';


    console.log(" this.currentNotice",  this.currentNotice)
    this.NoticeService
      .update(this.currentNotice.notice_id, this.currentNotice)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Notice was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteNotice(): void {
    this.NoticeService.delete(this.currentNotice.notice_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/notice']);
      },
      error: (e) => console.error(e)
    });
  }

}
