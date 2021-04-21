import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import{Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private httpClient:HttpClient,private router:Router) 
  {
   
   }
  onSubmit(data){
 this.httpClient.post('http://localhost:5000/user/creat',data).subscribe(res=>{
   console.log(res);
   if(res['status']!="username exist"){
     alert("Dang ki thanh cong");
   }
   else{
     alert("username exist");
   }
 })
  }
  ngOnInit(): void {
  }
  loginForm(){
    this.router.navigate(['login']);
  }

}
