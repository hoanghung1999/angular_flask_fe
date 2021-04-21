import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  user;
  constructor(private router:Router) { 
    this.user= this.router.getCurrentNavigation().extras.state;
    console.log(this.router.getCurrentNavigation().extras.state)
  }
  ngOnInit(): void {
  }

}
