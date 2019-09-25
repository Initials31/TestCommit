import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contest } from 'src/app/Models/contests';

@Injectable({
  providedIn: 'root'
})
export class ContestserviceService {
  
  baseURL = 'http://localhost:8086/mypronos/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getAllContests(): Observable<Contest[]>{
    return this.http.get<Contest[]>(`${this.baseURL}/contest`, this.httpOptions);
  }

  public getContestById(id:number): Observable<Contest> {
    return this.http.get<Contest>(`${this.baseURL}/contest/${id}`, this.httpOptions);
  }

  public createContest(contest:Contest): Observable<Contest>{
    return this.http.post<Contest>(`${this.baseURL}/create/contest`, contest, this.httpOptions);
  }

  public deleteContest(id: number): Observable<Contest> {
    return this.http.delete<Contest>(`${this.baseURL}/contest/${id}`, this.httpOptions);
  }
}
