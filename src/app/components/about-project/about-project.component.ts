import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.css']
})
export class AboutProjectComponent implements OnInit {
  constructor(private prod:ProductService){}
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

}
