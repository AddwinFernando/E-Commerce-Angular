import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent{
  cart: Cart[] = [];
  userId:number = 0;
  // checkout = this.cart.length > 0;
  total: number = 0;
  constructor(private carts: CartService, private Orders: OrdersService) {
    this.userId = parseInt(sessionStorage.getItem('logged user')!)
    this.cart = carts.setCart(this.userId);
  }

  
  addFromCart = (id: number): void => {
    let user:number = this.carts.getUser()
    this.carts.addToCart(id,user);
    this.cart = this.carts.setCart(this.userId);
  };
  removeFromCart = (id: number): void => {
    let user:number = this.carts.getUser()
    this.carts.removeFromCart(id,user);
    this.cart = this.carts.setCart(this.userId);
  };
  checkOut = (): void => {
    let user:number = parseInt(sessionStorage.getItem('logged user')!)
    for(let item of this.cart){
      if(item.user === user){
        this.Orders.setOrder(item.user,item.id,item.title,"Processing")
      }
    }
    this.cart = []
    this.carts.fliterCart(user)
  };
}
