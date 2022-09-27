import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GenericServiceService } from './generic-service.service';
import { Spend } from './../models/spend';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpendsService extends GenericServiceService<Spend> {

  private change= new Subject<Spend[]>();

  constructor(protected override http:HttpClient) {
    super(
      http,`${environment.url}spends`
    );
   }

   getCambio(){
    return this.change.asObservable();
  }

  setCambio(spends:Spend[]){
    this.change.next(spends);
  }
}
