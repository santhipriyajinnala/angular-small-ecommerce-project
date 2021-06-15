import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'shopping-app';
  constructor(public appservice: AppService){
    this.appservice.getProducts().subscribe((data:any)=>{
      console.log(data);
      this.appservice.products =data;
      this.appservice.getCategories().subscribe((data:any)=>{
        console.log(data);
        this.appservice.categories=data;
      }
        );
    }
      );
     

  }
  logout(){
    this.appservice.username = '';
  }
}

