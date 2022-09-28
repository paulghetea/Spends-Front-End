import { User } from './../../../models/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input()
  users : User[] = [];
  newUser : User[] = [];
  showPayments:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  usersInDebt : User[]=[];
  usersWithoutDebt : User[]=[];
  payments : number[]=[];

  solveDebt(){
    this.newUser= structuredClone(this.users);
    this.usersInDebt=[];
    this.usersWithoutDebt=[];
    this.payments=[];

    this.newUser.forEach(user1 => {
      if(user1.debt<0){
        this.usersInDebt.push(user1);
        this.newUser.forEach(user2 => {
          if(user2.debt>0){
            this.usersWithoutDebt.push(user2);
            if(Math.abs(user1.debt)>=user2.debt){
              this.payments.push(user2.debt);
              user1.debt = -Math.abs(Math.abs(user1.debt)-user2.debt);
              user2.debt = 0;
            }
            else if(Math.abs(user1.debt)<user2.debt){
              this.payments.push(user1.debt)
              user2.debt = user2.debt+user1.debt;
              user1.debt = 0
            }
          }
        });
      }
    });
  }

  showPaymentsFunction(){
      if(this.showPayments==false){
        this.showPayments=true;
        if(this.newUser.length==0){
          console.log("entra");

        this.solveDebt();
        }
        }else{
          this.showPayments=false
        }
      }
}

