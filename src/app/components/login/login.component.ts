import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService,private router:Router){}
  error:string = ''
  onsubmit = (loginForm:NgForm):void=>{
    if(this.auth.validate(loginForm.value)){
      this.auth.login(loginForm.value);
      this.router.navigate([''],{replaceUrl:true})
    }else{
      this.error="invalid credentials"
    }
    
  }
}
