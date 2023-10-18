import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Orders[] = [];
  constructor() {}

  getOrders = (userId:number): Orders[] => {
    this.orders = JSON.parse(localStorage.getItem('orders')!)
    this.orders = this.orders.filter((ord)=>ord.user===userId)
    return this.orders;
  };
  // setOrder = (productId:number,title:string,status:string):void=>{
  //   let setorders:Orders[] = []
  //   if(!localStorage.getItem('orders')){
  //     localStorage.setItem('orders',JSON.stringify(setorders))
  //   }

  //   setorders.push({productId:productId,title:title,status:status});
  //   localStorage.setItem('orders',JSON.stringify(setorders));
  //   this.orders = setorders;
  // }
  setOrder = (
    userId: number,
    productId: number,
    title: string,
    status: string
  ): void => {
    let curorder: Orders[] = [];
    if (!localStorage.getItem('orders')) {
      localStorage.setItem('orders', JSON.stringify(curorder));
    }
    curorder = JSON.parse(localStorage.getItem('orders')!);

    curorder.push({
      user: userId,
      productId: productId,
      title: title,
      status: status,
    });
    localStorage.setItem('orders', JSON.stringify(curorder));
  };

}
