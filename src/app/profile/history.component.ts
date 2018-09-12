import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 
import { Observable } from 'rxjs';


import { Console } from '@angular/core/src/console';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  providers: [FbProfileService],
  styleUrls: ['./profile.component.css']
})
export class HistoryComponent implements OnInit {

  list: Observable<any[]>;
  skillList: Observable<any[]>;; 
 


  constructor(private db: FbProfileService) { }

  ngOnInit() {

  this.list = this.db.getAllEmployment(); 
  this.skillList = this.db.getSkillList(); 



  
   
   //JSON.stringify(x) 
    }


}