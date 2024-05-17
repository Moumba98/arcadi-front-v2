import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/pictureApi.php';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Picture[]> {
    return this.http.get<Picture[]>(baseUrl);
  }

  get(id: any): Observable<Picture> {
    const numericId = +id;
    return this.http.get<Picture>(`${baseUrl}/?picture_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in Picture class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in picture class : " + data);
    const animal = {
      "picture_date": data.picture_date
    }
    return this.http.put(`${baseUrl}?picture_id=${id}`, Picture);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?picture_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${baseUrl}?title=${title}`);
  }
}
