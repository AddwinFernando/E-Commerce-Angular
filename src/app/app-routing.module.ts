import { NgModule } from '@angular/core';
import { NavigationEnd, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuardGuard } from './common/auth-guard.guard';
import { AboutProjectComponent } from './components/about-project/about-project.component';

const routes: Routes = [
  {path:"",component:AboutProjectComponent},
  {path:"home",component:ProductsComponent},
  {path:"cart" , component:CartComponent,canActivate:[authGuardGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[authGuardGuard]},
  {path:"login",component:LoginComponent},
  {path:"sign-up",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
