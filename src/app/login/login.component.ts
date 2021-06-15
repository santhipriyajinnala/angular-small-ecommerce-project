import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appservice:AppService, public router:Router) { }

  ngOnInit(): void {
  }
submitted(val){
console.log(val);
this.appservice.username = val;
this.router.navigate(['/'])
}
}
