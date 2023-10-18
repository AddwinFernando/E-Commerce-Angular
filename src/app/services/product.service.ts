import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];
  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  };

  getcachedproducts = ():boolean=>{
    if(localStorage.getItem('products')){
      return false
    } else{
      return true
    }
  }
  setcacheproducts = (prod:Product[]) =>{
    localStorage.setItem("products",JSON.stringify(prod))
  }
}
