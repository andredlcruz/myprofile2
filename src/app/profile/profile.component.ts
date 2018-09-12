import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [FbProfileService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
