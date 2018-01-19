import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

import {  SharedModule } from '../shared';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    
    ProfileComponent,
  ],

  providers: [
    
  ]
})
export class ProfileModule {}
