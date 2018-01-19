import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { HeaderComponent, FooterComponent, RightsidebarComponent } from '../shared/layout'
import {TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    ListErrorsComponent,
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent,
    ShowAuthedDirective
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
