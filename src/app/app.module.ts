import 'materialize-css';
//import { materialize } from 'rxjs/internal/operators/materialize';
import { MaterializeModule } from 'angular2-materialize/'; 
import { MaterializeDirective } from 'angular2-materialize/dist/materialize-directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, ApplicationRef } from '@angular/core';




import { MatButtonModule, MatCardModule, MatMenuModule,
 MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';




import { AppComponent } from './app.component';
import { RouterModule, Routes, ActivatedRoute }  from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';




import { HomeComponent } from './home/home.component';
import { HomeInfoComponent } from './home/home-info.component'; 
import {HomeSkillComponent } from './home/home-skill.component'; 
import {FooterComponent } from './home/footer.component'; 
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './profile/education.component';
import { HistoryComponent } from './profile/history.component';
import { StatementComponent } from './profile/statement.component'; 
import { ContactComponent } from './profile/contact.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotogalleryComponent } from  './photos/photogallery.component';
import { ReversePipe } from './reverse.pipe';
import { FilterhistoryPipe } from './filterhistory.pipe';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';






const appRoutes: Routes =[
  { path: 'home', component: HomeComponent }, 
  { path: 'profile', component: ProfileComponent}, 
  { path: 'photos', component: PhotosComponent }, 
  { path: 'photogallery/:id', component: PhotogalleryComponent }, 
  { path: 'dashboard', component: DashboardComponent}, 
  { path: '', redirectTo: 'home', pathMatch: 'full'}
  
]


@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    ProfileComponent,  HomeInfoComponent, HomeSkillComponent, FooterComponent,
    EducationComponent, 
    HistoryComponent, 
    StatementComponent, 
    ContactComponent,
    PhotosComponent,  PhotogalleryComponent,
    DashboardComponent, ReversePipe, FilterhistoryPipe 
  ],
  imports: [
    BrowserModule, MaterializeModule, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatGridListModule,
    BrowserAnimationsModule, RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
