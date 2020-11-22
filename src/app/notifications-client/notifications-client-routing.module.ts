import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsClientPage } from './notifications-client.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsClientPageRoutingModule {}
