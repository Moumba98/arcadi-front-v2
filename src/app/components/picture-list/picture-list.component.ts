import { Component,OnInit } from '@angular/core';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrl: './picture-list.component.css'
})
export class PictureListComponent implements OnInit {

  picture?: Picture[];
  currentPicture: Picture = {};
  currentIndex = -1;
  title = '';

  constructor(private PictureService: PictureService) {}

  ngOnInit(): void {
    this.retrievePicture();
  }

  retrievePicture(): void {
    this.PictureService.getAll().subscribe({
      next: (data) => {
        this.picture = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrievePicture();
    this.currentPicture = {};
    this.currentIndex = -1;
  }

  setActivePicture(picture: Picture, index: number): void {
    this.currentPicture = picture;
    this.currentIndex = index;
  }

  removeAllPicture(): void {
    this.PictureService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentPicture = {};
    this.currentIndex = -1;

    this.PictureService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.picture = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
