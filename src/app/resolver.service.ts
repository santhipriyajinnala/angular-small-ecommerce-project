import { Injectable } from '@angular/core';
import {Observable, observable} from'rxjs';
import { Resolve } from '@angular/router'
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Observable<any>> {

  constructor(public appservice: AppService) { }
  resolve(){
    return this.appservice.getProducts()
  }
}
