import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { User } from '../models/user.model';

//const baseUrl = 'http://localhost:8080/api/tutorials';
const baseUrl = 'http://localhost/zoo-arcadi-back-end/userApi.php';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: any): Observable<User> {
    const numericId = +id;
    return this.http.get<User>(`${baseUrl}/?user_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/?user_id=${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/?user_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}?title=${title}`);
  }
}
