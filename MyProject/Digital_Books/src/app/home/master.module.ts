import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { MasterComponent } from '../master/master.component';
import { Mainroutes } from '../routing/mainroutes';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../utilites/grid-ui/sign-up/sign-up.component';
import { LoginServiceService } from '../services/login-service.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    MasterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Mainroutes),
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [MasterComponent]
})
export class MasterModule { }