import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://127.0.0.1:8001/api/login";

  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.url,data);
  }
}
