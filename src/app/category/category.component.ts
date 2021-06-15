import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categoryProducts =[];
  constructor(public appservice:AppService, public route: ActivatedRoute) { 
    this.route.paramMap.subscribe(data =>{
      this.appservice.searchString='';
      console.log(data.get('categoryname'));
      this.route.data.subscribe((proddata)=>{
        this.categoryProducts=[];
        appservice.products.forEach((product)=>{
            if(product.category === data.get('categoryname')){
              this.categoryProducts.push(product);
            }
      })
    });
      // this.appservice.products.forEach((product)=>{
      //   if(product.category === data.get('categoryname')){
      //     this.categoryProducts.push(product);
      //   }
      // });
      console.log(this.categoryProducts);
    })
  }
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
