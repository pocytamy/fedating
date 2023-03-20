import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../service/LoginService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor(private loginService: LoginService, private router:Router) { }
  login(){
    this.loginService.login(this.loginForm.value).subscribe((data)=>{
      console.log(data)
      this.loginService.setUserToken(data);
      this.loginService.setToken(data.token);
      this.router.navigate(["/home"])
    })
  }
}
