import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./profile.component.css']
})
export class StatementComponent implements OnInit {

  statement ="Highly motivated with proven skills in project management, problem solving, and managing sensitive information. Current responsibilities include web development, data analyst, and technical support."

  constructor() { }

  ngOnInit() {
  }

}