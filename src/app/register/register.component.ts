import {Component, OnInit} from '@angular/core';
import {ImageService} from "../service/imageService";
import {FormControl, FormGroup} from "@angular/forms";
import {Account} from "../model/Account";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  account!:Account;
  constructor(private imageService: ImageService,private http:HttpClient,private router:Router) {
  }
  formCreateAccount!:FormGroup;
  ngOnInit() {
    this.formCreateAccount=new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
      number: new FormControl('')
    })
  }
  createAccount(){
    this.account=this.formCreateAccount.value;
    this.http.post('http://localhost:8080/register',this.account).subscribe()
    this.router.navigate([""])
  }
}
