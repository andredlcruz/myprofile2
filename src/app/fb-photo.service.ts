import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class FbPhotoService {

  constructor(private fb: AngularFirestore, private db: AngularFireDatabase) { }
  
  getAllPhotos(): Observable<any[]> {
    return this.db.list('photos').valueChanges(); 
  }

  getPhotoList(): Observable<any[]> {
    return this.db.list('photos').snapshotChanges(['child_added'])
  }

  getPhotoGallery(key: string): Observable<any[]> {
    return this.db.list('photos/' + key + '/photos').valueChanges(); 
  }

  getGalleryInfo(key: string): Observable<any[]> {
    return this.db.list('photos/' + key).valueChanges(); 
  }

}
