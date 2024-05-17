import { Component, OnInit } from '@angular/core';
import { Notice } from '../../models/notice.model';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrl: './notice-list.component.css'
})
export class NoticeListComponent implements OnInit  {

  notice?: Notice[];
  currentNotice: Notice = {};
  currentIndex = -1;
  title = '';

  constructor(private NoticeService: NoticeService) {}

  ngOnInit(): void {
    this.retrieveNotice();
  }

  retrieveNotice(): void {
    this.NoticeService.getAll().subscribe({
      next: (data) => {
        this.notice = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveNotice();
    this.currentNotice = {};
    this.currentIndex = -1;
  }

  setActiveNotice(notice: Notice, index: number): void {
    this.currentNotice = notice;
    this.currentIndex = index;
  }

  removeAllNotice(): void {
    this.NoticeService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentNotice = {};
    this.currentIndex = -1;

    this.NoticeService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.notice = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
