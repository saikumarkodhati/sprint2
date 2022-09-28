import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageURL = "././assets/Book.jpg";
  imageURL1 = "././assets/dotnet.jpg";
  imageURL2 = "././assets/Angular.png";
  imageURL3 = "././assets/Azure.png";
  imageURL4 = "././assets/webapi.png";

}
