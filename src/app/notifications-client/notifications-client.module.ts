import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsClientPageRoutingModule } from './notifications-client-routing.module';

import { NotificationsClientPage } from './notifications-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsClientPageRoutingModule
  ],
  declarations: [NotificationsClientPage]
})
export class NotificationsClientPageModule {}
