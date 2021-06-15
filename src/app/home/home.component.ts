import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public appservice:AppService) { }
inCart(product){
return this.appservice.addcartitems.indexOf(product)> -1 
  }
addTocart(product){
this.appservice.addcartitems.push(product);
}
removeFromcart(product){
  this.appservice.addcartitems.splice(this.appservice.addcartitems.indexOf(product),1)
}
ngOnDestroy(){
  this.appservice.searchString='';
}
  ngOnInit(): void {
  }

}
