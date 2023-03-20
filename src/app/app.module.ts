import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ImageService} from "./service/imageService";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth.interceptor';
import { NewfeedComponent } from './newfeed/newfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
