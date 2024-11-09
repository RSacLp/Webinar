import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { firebaseConfig } from '../environment/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: []
})
export class AppModule { }
