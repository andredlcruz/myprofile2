import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FbProfileService {

  constructor(private fb: AngularFirestore, private db: AngularFireDatabase) {   }


 /*
 * Returns a reference list of all employment entries
 * that holds the key and payload. 
 * 
 * Modify the list to map the key and payload.
 * 
 * @return Observables list in reverse order
 */
  getAllEmployment(): Observable<any[]> {


    return this.db.list('employment').snapshotChanges().pipe(
      map(changes => {
          return changes.map(c =>({key: c.payload.key, ...c.payload.val()})
          ).reverse() })
    )

    // return this.db.list('employment').snapshotChanges().pipe()
    // .map(changes => {
    //   return changes.map(c => ({key: c.payload.key, ...c.payload.val()})).reverse();
    // })
  }



  getJobDutiesbyID(keyID: string): Observable<any[]> {
    return this.db.list('functions/' + keyID).valueChanges(); 
  }
 
getJobDutiesTest(): Observable<any[]>   {


  return this.db.list('functions').snapshotChanges().pipe(
    map(changes => {
        return changes.map(c =>({key: c.payload.key, ...c.payload.val()})
        ).reverse() })
  )
 
}

getSkillList():  Observable<any[]> {
  return this.db.list('webtools').valueChanges(); 
}

     
  

}
