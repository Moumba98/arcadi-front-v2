import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinary_raport } from '../models/veterinary_raport.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/veterinary_raportApi.php';

@Injectable({
  providedIn: 'root'
})
export class VeterinaryRaportService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Veterinary_raport[]> {
    return this.http.get<Veterinary_raport[]>(baseUrl);
  }

  get(id: any): Observable<Veterinary_raport> {
    const numericId = +id;
    
    return this.http.get<Veterinary_raport>(`${baseUrl}/?veterinary_raport_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?veterinary_raport_id=/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Veterinary_raport[]> {
    return this.http.get<Veterinary_raport[]>(`${baseUrl}?title=${title}`);
  }
}
