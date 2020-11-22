import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddStockPageModule } from './vendeur/modal/add-stock/add-stock.module';
import { AuthentificationService } from './authentification/authentification.service';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PopovercomponentPageModule } from './popovercomponent/popovercomponent.module';

const firebaseConfig = {
  apiKey: 'AIzaSyDK9m65DEHzcWrLlYOae-sWTN2GnHVNSPE',
  authDomain: 'xdrink-d55ba.firebaseapp.com',
  databaseURL: 'https://xdrink-d55ba.firebaseio.com',
  projectId: 'xdrink-d55ba',
  storageBucket: 'xdrink-d55ba.appspot.com',
  messagingSenderId: '1013795282974',
  appId: '1:1013795282974:web:1d7b2ec1e4966f00210e0f',
  measurementId: 'G-47X4EFG0ZK'
};

@NgModule({
  declarations: [AppComponent, ],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AddStockPageModule,
       // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    PopovercomponentPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthentificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
