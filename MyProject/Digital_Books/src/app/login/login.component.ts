import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../model/userdata';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }

  UserDataModel: UserData =new UserData();

  ngOnInit(): void {
  }
loginUser()
{
  debugger;
  this._service.loginUser(this.UserDataModel).subscribe(res=>{
    localStorage.setItem('token',res.token);
    if(this.UserDataModel.type=="Reader")
    {
      this._router.navigate(['searchbook/add']);
    }
    else
    {
      this._router.navigate(['createbook/add']);
    }
  },res=>console.log(res));  
}
}
