import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent} from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleDetailsComponent } from './components/role-details/role-details.component';
import { VeterinaryRaportListComponent } from './components/veterinary-raport-list/veterinary-raport-list.component';
import { VeterinaryRaportDetailsComponent } from './components/veterinary-raport-details/veterinary-raport-details.component';
import { AddRoleComponent } from './components/add-role/add-role.component';
import { AddVeterinaryRaportComponent } from './components/add-veterinary-raport/add-veterinary-raport.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { HabitatListComponent } from './components/habitat-list/habitat-list.component';
import { HabitatDetailsComponent } from './components/habitat-details/habitat-details.component';
import { AddHabitatComponent } from './components/add-habitat/add-habitat.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceDetailsComponent } from './components/race-details/race-details.component';
import { AddRaceComponent } from './components/add-race/add-race.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { NoticeListComponent } from './components/notice-list/notice-list.component';
import { NoticeDetailsComponent } from './components/notice-details/notice-details.component';
import { PictureListComponent } from './components/picture-list/picture-list.component';
import { PictureDetailsComponent } from './components/picture-details/picture-details.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';





@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    RoleListComponent,
    RoleDetailsComponent,
    VeterinaryRaportListComponent,
    VeterinaryRaportDetailsComponent,
    AddRoleComponent,
    AddVeterinaryRaportComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    AddAnimalComponent,
    HabitatListComponent,
    HabitatDetailsComponent,
    AddHabitatComponent,
    RaceListComponent,
    RaceDetailsComponent,
    AddRaceComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    AddServiceComponent,
    NoticeListComponent,
    NoticeDetailsComponent,
    PictureListComponent,
    PictureDetailsComponent,
    AddNoticeComponent,
   

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
