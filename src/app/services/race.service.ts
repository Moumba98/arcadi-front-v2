import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, race } from 'rxjs';
import { Race } from '../models/race.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/raceApi.php';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Race[]> {
    return this.http.get<Race[]>(baseUrl);
  }

  get(id: any): Observable<Race> {
    const numericId = +id;
    return this.http.get<Race>(`${baseUrl}/?race_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in service class : " + data);
    const role = {
      "label": data.label
    }
    return this.http.put(`${baseUrl}?race_id=${id}`, race);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/?race_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Race[]> {
    return this.http.get<Race[]>(`${baseUrl}?title=${title}`);
  }
}
