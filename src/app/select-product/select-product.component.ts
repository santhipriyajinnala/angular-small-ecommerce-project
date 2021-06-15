import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit {
singleprod: any;
  constructor(public route:ActivatedRoute) {
    this.route.paramMap.subscribe((data)=>{
      this.route.data.subscribe((routedata)=>{
        routedata.Prod.forEach((product:any)=>{
          if(product.id == data.get('productid')){
            this.singleprod = product;
          }
    })
      })
    })
   }

  ngOnInit(): void {
  }

}
