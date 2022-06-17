import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = "https://newsapi.org/v2/everything?q=tesla&from=2022-05-06&sortBy=publishedAt&apiKey=8988de44ef3242878b584bfc83174bbf";
  headlinesUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=8988de44ef3242878b584bfc83174bbf";
  sportsUrl = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=8988de44ef3242878b584bfc83174bbf";
  politicsUrl = "https://newsdata.io/api/1/news?country=ng&apikey=pub_8110d1971a3bf8efce745ec61b711f4c4b27";

  constructor(private http:HttpClient) { }

  getNews():Observable<any>{
    return this.http.get(this.url);
  }

  sportsNews():Observable<any>{
    return this.http.get(this.sportsUrl);
  }

  headlines():Observable<any>{
    return this.http.get(this.headlinesUrl);
  }
  politics(){
    return this.http.get(this.politicsUrl)
  }

}
