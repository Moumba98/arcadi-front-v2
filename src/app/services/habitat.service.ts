import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitat } from '../models/habitat.model';


const baseUrl = 'http://localhost/zoo-arcadi-back-end/habitatApi.php';


@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(baseUrl);
  }

  get(id: any): Observable<Habitat> {
    const numericId = +id;
    return this.http.get<Habitat>(`${baseUrl}/?habitat_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in service class : " + data);
    const habitat = {
      "name": data.name


    }
    return this.http.put(`${baseUrl}?habitat_id=${id}`, habitat);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?habitat_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(`${baseUrl}?title=${title}`);
  }
}
