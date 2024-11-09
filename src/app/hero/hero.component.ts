import { Component } from '@angular/core';
import { Firestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import {FormsModule} from '@angular/forms';
import { doc, setDoc, addDoc } from "firebase/firestore";
import { FirestoreModule } from '@angular/fire/firestore';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule,FirestoreModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
   nombre: string ='';
   apellido: string = '';
   curso: string ='';

   constructor(private firestore: Firestore){}
   async onSubmit(){
    try{
      const docRef = await addDoc(collection(this.firestore, 'estudiante'),{
        nombre: this.nombre,
        apellido: this.apellido,
        curso: this.curso
      });
      console.log("Documento escrito con ID: ", docRef.id);
    }catch(e){
      console.error("Error al añadir documento: ",e);
    }
   }

  }



