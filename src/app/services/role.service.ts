import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Role } from '../models/role.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/roleApi.php';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(baseUrl);
  }

  get(id: any): Observable<Role> {
    const numericId = +id;
    return this.http.get<Role>(`${baseUrl}/?role_id=${numericId}`);
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
    return this.http.put(`${baseUrl}?role_id=${id}`, role);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?role_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Role[]> {
    return this.http.get<Role[]>(`${baseUrl}?title=${title}`);
  }
}
