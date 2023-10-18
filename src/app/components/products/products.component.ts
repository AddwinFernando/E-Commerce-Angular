import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = JSON.parse(localStorage.getItem("products")!) as Product[];
  thumbnail: string =
    'https://media.istockphoto.com/id/1470905438/vector/cartoon-dairy-products-doodle-collection.jpg?s=170667a&w=0&k=20&c=prlwofYhPcfuWH22aPCXHX_iS9LnByThsrGg6pevhZo=';
  constructor(private cart: CartService, private prod: ProductService) {}
  ngOnInit(): void {
    if (this.prod.getcachedproducts()) {
      this.prod.getProducts().subscribe({
        next: (data: Product[]) => {
          this.prod.setcacheproducts(data as Product[]);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  add = (id: number): void => {
    // let quantRef = document.getElementById(`quantity${id}`)!;
    // let addBtnClass = document.getElementById(`addBtn${id}`)?.classList;
    // let addQuantCalss = document.getElementById(`addQuant${id}`)?.classList;
    let user = this.cart.getUser();
    // addBtnClass?.add('visually-hidden');
    // addQuantCalss?.remove('visually-hidden');
    console.log('add');
    // quantRef.innerText = this.cart.getQuantity(id).toString()!;

    this.cart.addToCart(id,user);
    
  };
  // minBtn = (id: number) => {
  //   console.log('remove');
  //   let user = this.cart.getUser()
  //   let removeItem = this.cart.removeFromCart(id,user);
  //   if (removeItem === -1) {
  //     let addBtnClass = document.getElementById(`addBtn${id}`)?.classList;
  //     let addQuantCalss = document.getElementById(`addQuant${id}`)?.classList;
  //     addBtnClass?.remove('visually-hidden');
  //     addQuantCalss?.add('visually-hidden');
  //     console.log(0);
  //   }
  //   let quantRef = document.getElementById(`quantity${id}`)!;
  //   quantRef.innerText = this.cart.getQuantity(id).toString()!;
  // };
}
