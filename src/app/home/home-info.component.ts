import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})


export class HomeInfoComponent implements OnInit {
  Description = 'Welcome to my webpage. It was designed and developed in Angular and Materializecss with Firebase in the backend';
  Bio = "Andre De La Cruz graduated from the University of Texas at El Paso in 2013 with a degree in Computer Science. "
      + "His area of focus includes web developing single page apps (SPA) in Angular and HTML5 in his current position among other duties such report analysis and administrative responsibilities. " 
      + "However, he practices and enjoys other programming languages such as C# and Java. " 
      +  "A long term goal is to secure a position as a full time software or web developer combining Angular and C#. "
      +  "Andre has experience in programming in C, SQL, and Python. 'I would like my career path to include programming C# and ASP.NET while enhancing my understanding in web development. "
      +  "But I do enjoy creating web apps and challanges that come with it.' "
  constructor() {}

    ngOnInit() {}
  
}
