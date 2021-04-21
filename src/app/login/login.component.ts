import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { User } from '../User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private httpClient:HttpClient,private router:Router) { 
  }
  onSubmit(data){
    this.httpClient.post('http://localhost:5000/user/login',data).subscribe((result)=>{
    if(result['status']!="Username or password fail"){
      console.log(result);
      this.router.navigateByUrl('/home',{state:{'name':result['name']}});
    
  }else{
    alert("Username or password fail");
    this.router.navigate(['login']);
  }
    })

  }
  signupform(){
    this.router.navigate(['signup']);
  }

  ngOnInit(): void {
  }
}
