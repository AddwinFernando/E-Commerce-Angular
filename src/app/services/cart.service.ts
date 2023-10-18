import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  cart: Cart[] = [];
  constructor(private prod: ProductService) {
    this.products = JSON.parse(localStorage.getItem('products')!) as Product[];
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!) as Cart[];
    }
  }

  setProducts = (prod: Product[]) => {
    this.products = prod;
  };

  addToCart = (id: number, userId: number): void => {
    let currProduct = this.products.find((item) => item.id === id);
    let curcart:Cart[] = []
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart',JSON.stringify(curcart))
    }
    curcart = JSON.parse(localStorage.getItem('cart')!);
    let itemCheck = curcart.find(
      (item) => item.id === id && item.user === userId
    );
    if (itemCheck) {
      console.log('in');
      curcart = curcart.map((item): Cart => {
        if (item.id === itemCheck?.id && item.user === itemCheck.user) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    } else {
      curcart.push({
        id: currProduct?.id!,
        title: currProduct?.title!,
        quantity: 1,
        price: currProduct?.price!,
        user: userId,
      });
    }
    console.log('set')
    this.cart = curcart
    localStorage.setItem('cart', JSON.stringify(curcart));
  };
  removeFromCart = (id: number, user: number): number => {
    let curcart:Cart[] = []
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart',JSON.stringify(curcart))
    }
    curcart = JSON.parse(localStorage.getItem('cart')!);
    let itemCheck = curcart.find(
      (item) => item.id === id && item.user === user
    );
    if (itemCheck) {
      curcart = curcart.map((item): Cart => {
        if (item.id === itemCheck?.id && itemCheck.user === item.user) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      let zeroCheck = curcart.find((item) => item.id === id)?.quantity === 0;

      if (zeroCheck) {
        curcart = curcart.filter((item) => item.quantity !== 0);
        localStorage.setItem('cart',JSON.stringify(curcart))
        return -1;
      }
      localStorage.setItem('cart',JSON.stringify(curcart))
      return 1;
    }
    localStorage.setItem('cart',JSON.stringify(curcart))
    return 0;
  };
  getQuantity = (id: number): number => {
    let quantCart = JSON.parse(localStorage.getItem('cart')!)
    let itemCheck = quantCart.find((item:Cart) => item.id === id);
    if (itemCheck) {
      return itemCheck.quantity+1;
    } else {
      return -1;
    }
    // return 0
  };
  setCart = (userId:number): Cart[] => {
    let setcart = this.cart.filter(
      (item) => item.user === userId
    );
    return setcart;
  };
  getPrice = (id: number): number => {
    let itemCheck = this.cart.find((item) => item.id === id);
    if (itemCheck) {
      return itemCheck.quantity;
    } else {
      return -1;
    }
  };
  getCartItem = (id: number): Cart => {
    let cartItem = this.cart.find((item) => item.id === id);
    return cartItem!;
  };
  // clearCart = (): void => {
  //   this.cart = [];
  // };
  getUser = (): number => {
    return parseInt(sessionStorage.getItem('logged user')!);
  };
  crateCart = ()=>{
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }
  }
  fliterCart = (userId:number)=>{
    let curcart:Cart[]=[]
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(curcart));
    }
    curcart = JSON.parse(localStorage.getItem('cart')!);

    curcart = curcart.filter((item)=>item.user===userId)

    localStorage.setItem('cart',JSON.stringify(curcart))

  }
}
