import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})


export class HomeInfoComponent implements OnInit {
  Description = "Welcome to my webpage. It was designed and developed in Angular and Materializecss using Google's Firebase in the backend";
  Bio = "Andre De La Cruz graduated from the University of Texas at El Paso in 2013 with a degree in Computer Science. "
      + "His area of focus includes web developing single page apps (SPA) in Angular and HTML5.  Other current responsibilities include data analysis and technical support. " 
      + "However, he practices and enjoys writing code in C# and Java. " 
      +  "A long term goal is to secure a position as a full time software or web developer combining Angular, C#, and SQL. "
      +  "Andre has programmed with various languages such as C, SQL, Python, TypeScript. I have knowledge of Firebase and AngularFire.  'I would like my career path to include programming  while enhancing my understanding in web development. "
      +  "'I do enjoy programming and the challanges that come with it.' "
  constructor() {}

    ngOnInit() {}
  
}
