import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  categories:any;
  products:any[]=[];
  username;
  addcartitems=[];
  searchString = '';
  totalAmount = 0 ;
  constructor(
    public http : HttpClient
  ) { 
  
  }
  
  getProducts(){
    return this.http.get("../assets/products.json");
  }
  getCategories(){
    return this.http.get("../assets/categories.json");
  }
}
