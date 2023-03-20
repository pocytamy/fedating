import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProfileComponent} from "./create-profile/create-profile.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {NewfeedComponent} from "./newfeed/newfeed.component";

const routes: Routes = [
  { path: 'edit', component: CreateProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newfeed', component: NewfeedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
