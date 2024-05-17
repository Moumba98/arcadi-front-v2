import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../models/picture.model';


@Component({
  selector: 'app-picture-details',
  templateUrl: './picture-details.component.html',
  styleUrl: './picture-details.component.css'
})
export class PictureDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPicture: Picture = {

    picture_name: '',
  };

  message = '';

  constructor(
    private PictureService: PictureService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('Picture_id');
      if(id){
        this.getPicture(id);
      }
    }
  }

  getPicture(id: string): void {
    this.PictureService.get(id).subscribe({
      next: (data) => {
        this.currentPicture = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog" + value);
  }

  updatePicture(): void {
    this.message = '';


    console.log(" this.currentPicture",  this.currentPicture)
    this.PictureService
      .update(this.currentPicture.picture_id, this.PictureService)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Picture was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePicture(): void {
    this.PictureService.delete(this.currentPicture.picture_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/picture']);
      },
      error: (e) => console.error(e)
    });
  }

}
