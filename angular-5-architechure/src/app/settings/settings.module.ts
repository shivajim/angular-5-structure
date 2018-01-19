import { ModuleWithProviders, NgModule } from '@angular/core';

import { SettingsComponent } from './settings.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
