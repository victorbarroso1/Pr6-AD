import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyAccountPage } from './modify-account.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyAccountPageRoutingModule {}
