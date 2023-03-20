import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ImageService} from "../service/imageService";
import {Profile} from "../model/Profile";

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {
  profiles: Profile[] = [];
  profile!: Profile;
  i: number = 0;

  constructor(private router: Router, private profileService: ImageService) {
  }

  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }

  ngOnInit() {
    this.getAllProfile()
  }

  getAllProfile() {
    this.profileService.newFeed().subscribe((res) => {
      this.profiles = res;
      this.profile = res[0];
      console.log(res)
    })
  }

  back() {
    if (this.i <= this.profiles.length-1 && this.i >= 0) {
      this.profile = this.profiles[this.i - 1]
      this.i = this.i - 1;
    }
  }

  next() {
    if (this.i <= this.profiles.length && this.i >= 0) {
      this.profile = this.profiles[this.i + 1]
      this.i = this.i + 1;
    }
  }
  checkBack():boolean{
    if(this.i==0){
      return false
    }
    return true;
  }
  checkNext():boolean{
    if(this.i== this.profiles.length-1){
      return false
    }
    return true;
  }
}
