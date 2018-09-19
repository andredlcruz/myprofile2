import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/internal/operators/combineLatest';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class FbPhotoService {

  constructor(private fb: AngularFirestore, private db: AngularFireDatabase) { }
  
  getAllPhotos(): Observable<any[]> {
    return this.db.list('photos').valueChanges(); 
  }

  getPhotoList(): Observable<any[]> {
  //return this.db.list('photos').snapshotChanges(['child_added'])
   return this.db.list('photos', ref => ref.orderByChild('gallery')).snapshotChanges(['child_added'])
  }

  getPhotoGallery(key: string): Observable<any[]> {
    return this.db.list('photos/' + key + '/photos').valueChanges(); 
  }

  getGalleryInfo(key: string): Observable<any[]> {
    return this.db.list('photos/' + key).valueChanges(); 
  }

}
