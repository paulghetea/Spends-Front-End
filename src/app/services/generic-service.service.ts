import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService<T> {

  constructor( protected http: HttpClient, @Inject("url") protected url:string) { }

  getAll(){
    return this.http.get<T[]>(this.url);
  }

  add(t: T){
    return this.http.post(this.url,t)
  }
}
