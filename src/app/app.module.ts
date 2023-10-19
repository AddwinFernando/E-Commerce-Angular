import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CartService } from './services/cart.service';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavigationEnd } from '@angular/router';
import { AboutProjectComponent } from './components/about-project/about-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    OrdersComponent,
    SignupComponent,
    AboutProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
