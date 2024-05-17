import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/serviceApi.php';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(baseUrl);
  }

  get(id: any): Observable<Service> {
    const numericId = +id;
    return this.http.get<Service>(`${baseUrl}/?service_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in service class : " + data);
    const service = {
      "name": data.name

    }
    return this.http.put(`${baseUrl}?service_id=${id}`, service);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?service_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Service[]> {
    return this.http.get<Service[]>(`${baseUrl}?title=${title}`);
  }
}
