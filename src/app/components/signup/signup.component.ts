import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth:AuthService){}
 onsubmit = (signupForm:NgForm):void=>{
  let user:User = {id:this.auth.uniqueId(),email:signupForm.value.signupemail,password:signupForm.value.password1}
  this.auth.signup(user)
 }
}
