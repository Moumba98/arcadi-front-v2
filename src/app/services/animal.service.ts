import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';


const baseUrl = 'http://localhost/zoo-arcadi-back-end/animalApi.php';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(baseUrl);
  }

  get(id: any): Observable<Animal> {
    const numericId = +id;
    return this.http.get<Animal>(`${baseUrl}/?animal_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in service class : " + data);
    const animal = {
      "first_name": data.first_name
    }
    return this.http.put(`${baseUrl}?animal_id=${id}`, animal);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?animal_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${baseUrl}?title=${title}`);
  }

}
