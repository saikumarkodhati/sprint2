import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/userdata';
import { registerData } from 'src/app/model/register';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }

  UserDataModel: UserData =new UserData();
  SearchBookModel: registerData = new registerData();

  ngOnInit(): void {
  }
  registeruser()
  {
    debugger;
    this._service.registerUser(this.UserDataModel).subscribe(res=>{
      localStorage.setItem('token',res.token);
      this._router.navigate(['home']);
    },res=>console.log(res));  
  }

}
