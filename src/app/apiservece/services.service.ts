import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = `https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1`; 
  private apiKey = "6645b81d49mshb158bb87fb04f4dp1feb2djsn5d2559f2e7bc";
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '6645b81d49mshb158bb87fb04f4dp1feb2djsn5d2559f2e7bc',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
