import {Component, OnInit} from '@angular/core';
import {Profile} from "../model/Profile";
import {Router} from "@angular/router";
import {LoginService} from "../service/LoginService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {
  }

  accountId1: number = this.loginService.getUserToken().id
  profile!: Profile;
  gender!: string;

  ngOnInit() {
    this.loginService.myProfile(this.accountId1).subscribe((res) => {
      this.profile = res;
      if (res.gender === 1) {
      this.gender="Nam"
      }else if (res.gender === 2){
        this.gender="Nữ"
      }else if (res.gender === 3){
        this.gender="Hên xui"
      }
    })

  }

  back() {

  }

  next() {
  }

  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }
}
