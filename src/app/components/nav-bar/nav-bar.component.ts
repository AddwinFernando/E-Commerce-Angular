import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private auth:AuthService){}
  showCart = () => {
    // let cartRef = document.getElementById('cartPage')?.classList;
    // let productRef = document.getElementById('product')?.classList;
    // cartRef?.remove('visually-hidden');
    // productRef?.add('visually-hidden');
  };
  showProduct = () =>{
    // let cartRef = document.getElementById('cartPage')?.classList;
    // let productRef = document.getElementById('product')?.classList;
    // cartRef?.add('visually-hidden');
    // productRef?.remove('visually-hidden');
  }
  logout = () =>{
    this.auth.logout();
  }
}