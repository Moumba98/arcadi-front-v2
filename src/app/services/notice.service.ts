import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notice } from '../models/notice.model';

const baseUrl = 'http://localhost/zoo-arcadi-back-end/noticeApi.php';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Notice[]> {
    return this.http.get<Notice[]>(baseUrl);
  }

  get(id: any): Observable<Notice> {
    const numericId = +id;
    return this.http.get<Notice>(`${baseUrl}/?notice_id=${numericId}`);
  }

  create(data: any): Observable<any> {
    console.log("Data in service class : " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {

    console.log("Data in notice class : " + data);
    const notice = {
      "pseudo": data.pseudo


    }
    return this.http.put(`${baseUrl}?notice_id=${id}`, notice);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}?notice_id=${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Notice[]> {
    return this.http.get<Notice[]>(`${baseUrl}?title=${title}`);
  }
}
