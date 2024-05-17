import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from '../../services/race.service';
import { Race } from '../../models/race.model';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrl: './race-details.component.css'
})
export class RaceDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentRace: Race = {
    race_id : '',
    label: '',
  };

  message = '';

  constructor(
    private RaceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      const id = this.route.snapshot.paramMap.get('race_id');
      console.log(id);
      if(id){
        this.getRace(id);
      }
    }
  }

  getRace(id: string): void {
    this.RaceService.get(id).subscribe({
      next: (data) => {
        this.currentRace = data;
        // this.currentUser = Array.isArray(data) ? data[0] : data;
        //console.log("getUser " + this.currentUser.username);
      },
      error: (e) => console.error(e)
    });
  }

  log(value : any) : void{
    console.log("In myLog:    " + value);
  }

  updateRace(): void {
    this.message = '';
    const data = {
      role_id : this.currentRace.race_id,
      label: this.currentRace.label,
    };


    console.log("this.currentRace", this.currentRace);

    this.RaceService
      .update(this.currentRace.race_id, data);
      /* .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Roles was updated successfully!';
        },
        error: (e) => console.error(e)
      }); */
  }

  deleteRace(): void {
    this.RaceService.delete(this.currentRace.race_id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/race']);
      },
      error: (e) => console.error(e)
    });
  }

}
