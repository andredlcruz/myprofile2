import { Component, OnInit } from '@angular/core';
import { FbPhotoService } from "../fb-photo.service"; 
import { Observable } from 'rxjs';


import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

import { Console } from '@angular/core/src/console';
import * as $ from 'jquery';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  providers: [FbPhotoService],
  styleUrls: ['./photos.component.css']
})

export class PhotogalleryComponent implements OnInit{

photoGalleryKey: string; 
photos: Observable<any[]>;
galleryInfo: Observable<any[]>;


constructor( route: ActivatedRoute, private db: FbPhotoService, private router: Router){
      this.photoGalleryKey = route.snapshot.params['id']; 
}

ngOnInit() {
  this.photos = this.db.getPhotoGallery(this.photoGalleryKey); 
  this.galleryInfo = this.db.getGalleryInfo(this.photoGalleryKey); 
}

}