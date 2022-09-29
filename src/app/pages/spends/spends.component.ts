import { PaymentsComponent } from './payments/payments.component';
import { SpendsService } from './../../services/spends.service';
import { Spend } from './../../models/spend';
import { usersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, OnInit, ViewChild, PipeTransform } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spends',
  templateUrl: './spends.component.html',
  styleUrls: ['./spends.component.css']
})
export class SpendsComponent implements OnInit {

  users : User[];
  user :User = new User();
  spend: Spend =new Spend();
  spends:Spend[];
  today = new Date().toJSON().split('T')[0];

  @ViewChild(PaymentsComponent) payment : PaymentsComponent;

  newUser: boolean = false;
  newSpend : boolean = false;

  totalPayments:number=0;

  constructor(private spendsService : SpendsService, private usersService : usersService) { }

  ngOnInit(): void {
    this.getSpends();
    this.getUsers();
  }

  getSpends(){
    this.spendsService.getAll().subscribe(data=>{
      this.spends = data;
      this.calculateTotalPayments();
    })
  }

  getUsers(){
    this.usersService.getAll().subscribe(data=>{
      this.users = data
    })

  }

  createUser(){
    this.usersService.add(this.user).subscribe(
      {
        next:()=>{
          this.getUsers();
        },
        error:(error:HttpErrorResponse) =>{
          if(error.status == 404){
            console.log("Error 404");
          }
          else if(error.status==500){
            console.log(error.error)
          }
        }
      }
    );
    this.newUser=false;
    this.user=new User();
  }

  createSpend(){
    this.spendsService.add(this.spend).subscribe(
      {
        next:()=>{
          this.getSpends();
          this.getUsers();
        },
        error:(error:HttpErrorResponse) =>{
          if(error.status == 404){
            console.log("Error 404");
          }
          else if(error.status==500){
            console.log(error.error)
          }
        }
      }
    );
    this.newSpend=false;
    this.spend =new Spend();
  }

  btnNewUser(){
    if(this.newUser==false){
    this.newUser=true;
    }else{
      this.newUser=false
    }
  }
  btnNewSpend() {
    if( this.newSpend==false){
      this.newSpend=true;
      }else{
        this.newSpend=false
      }
  }

  calculateTotalPayments(){
    this.totalPayments=0;
    this.spends.forEach(spend => {
      this.totalPayments += spend.cost;
    });
  }

}
