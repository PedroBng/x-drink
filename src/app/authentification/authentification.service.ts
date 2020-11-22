import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  connected: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });
   }

  signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }



  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (user) => {
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  signOut() {
    this.afAuth.signOut();
  }
}
