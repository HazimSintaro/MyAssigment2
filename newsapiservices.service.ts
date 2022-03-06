import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsApi url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=my&apiKey=b8d36528465f44328d8e3e309b662eb5";

  //technewsApi URL
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=my&category=technology&apiKey=b8d36528465f44328d8e3e309b662eb5";

  //businessnewsApi URL
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=my&category=business&apiKey=b8d36528465f44328d8e3e309b662eb5";

   //businessnewsApi URL
   healthApiUrl = "https://newsapi.org/v2/top-headlines?country=my&category=health&apiKey=b8d36528465f44328d8e3e309b662eb5";


  //topHeading
  topHeading():Observable<any>
  {
      return this._http.get(this.newsApiUrl)

  }

  //TechNews
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl)
  }

  //BusinessNews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl)
  }

  //HealthNews
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl)
  }

}
