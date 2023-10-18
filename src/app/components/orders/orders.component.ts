import { Component } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders:Orders[] = []
  user:number = 0
  constructor(private orderservice:OrdersService){
    this.user = parseInt(sessionStorage.getItem("logged user")!)
    this.orders = orderservice.getOrders(this.user);
  }
}
