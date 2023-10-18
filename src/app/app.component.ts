import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private auth:AuthService, private prod:ProductService){

  }
  title = 'E-commerce';
  ngOnInit(): void {
    this.auth.loadUser();
  }
  isLoggedIn():boolean{
    return this.auth.isLoggedIn();
  }
}
