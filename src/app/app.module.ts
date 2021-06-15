import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component'
import { ResolverService } from './resolver.service';
import { SelectProductComponent } from './select-product/select-product.component';
import { LoginComponent } from './login/login.component';
import {SearchPipe} from './search.pipe';
import { from } from 'rxjs';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component'
const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path:'category/:categoryname',
    component:CategoryComponent,
    resolve:{Prod:ResolverService }
  },
  {
    path:'product/:productid',
  component:SelectProductComponent,
  resolve:{Prod:ResolverService }
 },
 {
  path:'login',
component:LoginComponent,
},
{
  path:'cart',
  component:CartComponent,
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    SelectProductComponent,
    LoginComponent,
    SearchPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
