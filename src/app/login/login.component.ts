import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your Perfect Banking Partner"
  acnt="enter you account number"
  acno=''
  psw=''
userDetails:any={
  1000:{acno:1001,username:"amal",password:123,balance:250000},
  1001:{acno:1002,username:"amala",password:123,balance:10000},
  1002:{acno:1003,username:"anaka",password:123,balance:110000},
  1003:{acno:1004,username:"joyal",password:123,balance:10500},



}
  constructor() { }

  ngOnInit(): void {
  }

  Login(){
    var acnum=this.acno
    var psw=this.psw
    let userDetails=this.userDetails
    if(acnum in this.userDetails){
if(psw==userDetails[acnum]['password']){
  alert('Login sucess')
}
else{
  alert('incorrect password')
}    }
  
   else{ alert('login clicked')
  }}
acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
}
pswChange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
}
}