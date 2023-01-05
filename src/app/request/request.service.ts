import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:5000/api/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }
  
  getRequest(id: string, page: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}/${page}`);
  }

  addrequest(payload: any): Observable<any> {
    return this.http.post(baseUrl , payload);
  }

}
