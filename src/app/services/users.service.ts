import { GenericServiceService } from './generic-service.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class usersService extends GenericServiceService<User> {

  private change= new Subject<User[]>();

  constructor(protected override http:HttpClient) {
    super(
      http,`${environment.url}users`
    );
   }

   getCambio(){
    return this.change.asObservable();
  }

  setCambio(users:User[]){
    this.change.next(users);
  }
}
