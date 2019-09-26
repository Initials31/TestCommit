import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  baseURL = 'http://localhost:8086/mypronos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseURL}/evenement`, this.httpOptions);
  }

  public getEventById(id:number): Observable<Event> {
    return this.http.get<Event>(`${this.baseURL}/evenement/${id}`, this.httpOptions);
  }

  public createEvent(event:Event): Observable<Event>{
    return this.http.post<Event>(`${this.baseURL}/evenement/create`, event, this.httpOptions);
  }

  public deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.baseURL}/evenement/delete/${id}`, this.httpOptions);
  }
}
