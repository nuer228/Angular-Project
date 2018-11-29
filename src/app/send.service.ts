import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Send} from './send.model';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})

// Send Service to connect our CRUD to MangoDB.
export class SendService {

  constructor(private http: HttpClient) { }
  
    getSendData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/send");
    }

  addSend(country: string, capital: string, population: string): Observable<any> {
    const send: Send = {country: country, capital: capital, population: population};
    return this.http.post("http://localhost:8081/api/send",send);
  }

  deleteSend(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/send/"+id);
  }

  getSend(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/send/"+id);
  }

  updateSend(id:String, country: string, capital: string, population: string): Observable<any> {
    const send: Send = {country: country, capital: capital, population: population};
  return this.http.put("http://localhost:8081/api/send/"+id, send);
  }
}
