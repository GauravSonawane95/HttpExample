import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  BaseUrl:string="http://localhost:3000/"

 
  Header:HttpHeaders = new HttpHeaders()
                                      .set("Content-type","application/json")

  constructor(private http:HttpClient) { }

   
  getData(endPoint: string) {
    const url = this.BaseUrl + endPoint;
    return this.http.get(url, { headers: this.Header });
  }

  saveToServer(endPoint:string,body:any){
     const url = this.BaseUrl + endPoint ;
     return this.http.post(url,body,{ headers: this.Header });

  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.BaseUrl}users/${id}`;
    return this.http.delete(url, { headers:this.Header });
  }

}
