import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyAccountPageRoutingModule } from './modify-account-routing.module';

import { ModifyAccountPage } from './modify-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyAccountPageRoutingModule
  ],
  declarations: [ModifyAccountPage]
})
export class ModifyAccountPageModule {}
