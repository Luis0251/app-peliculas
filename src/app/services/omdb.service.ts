import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  readonly API_KEY = environment.api_key
  readonly API_URL = environment.api_Url
  constructor(private readonly http:HttpClient) { }
  getQuery(query:string):Observable<any>{
    const params = new HttpParams()
    .set('i',query)
    .set('apikey',this.API_KEY)
    return this.http.get<any>(`${this.API_URL}`,{params})
  }
}
