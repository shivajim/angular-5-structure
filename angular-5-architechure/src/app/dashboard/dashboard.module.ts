import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared';
import { LauncherComponent } from './launcher/launcher.component';
import { DashboardRouting }  from './dashboard.routing';
import { ProjectComponent }  from './project/project.component';
import { ViewProjectComponent } from './project/component/view-project/view-project.component';
import {
  TopMenuComponent,
} from './project/dashboard-shared';

import {
  GotoComponent,
  SendmailComponent,
  DownloadComponent,
  PrinttoolComponent,
  ViewsettingsComponent
} from './project/dashboard-shared/top-menu';

import { 
  LeftMenuComponent,
  CustomFilterComponent,
  TabBarComponent,
  SideMenusComponent,
  ProjectInfoComponent,
  AdvancesearchComponent,
  AlbumsComponent,
  AdministrationComponent, 
  ActoreapprovalReportComponent, FilteredfilenameListComponent,
  SelectedfilenameListComponent, ImageExclusivesComponent,
  ProjectsummaryReportComponent, ImagenotesReportComponent,
  ImagecaptionReportComponent, Taggingview1Component,
  Taggingview2Component, CurrentactivityReportComponent,
  TransactionReportComponent, AdvanceimageTaggingComponent,
  ActoreidReportComponent, DeliveryComponent,
  FoxarchiveDeliveryComponent, FinalizeUnfinalizeComponent,
  RejectionToggleComponent,
  AuditComponent
} from 'app/dashboard/project/dashboard-shared/left-menu';

import { SidebarService } from './project/dashboard-shared/left-menu/sidebar-service/sidebar-service';
import { TestSubprojectComponent } from './project/component/test-subproject/test-subproject.component';








@NgModule({
  imports: [
    NgxPaginationModule,
    SharedModule,
    DashboardRouting
  ],
  declarations: [
    DashboardComponent,
    LauncherComponent,
    ProjectComponent,
    TopMenuComponent,
    
    ViewProjectComponent,
    TestSubprojectComponent,
    GotoComponent,
    SendmailComponent,
    DownloadComponent,
    PrinttoolComponent,
    ViewsettingsComponent,

    LeftMenuComponent,
    CustomFilterComponent,
    TabBarComponent,
    SideMenusComponent,
    ProjectInfoComponent,
    AdvancesearchComponent,
    AlbumsComponent,
    AdministrationComponent,
    AuditComponent,
    
    ActoreapprovalReportComponent,
    FilteredfilenameListComponent,
    SelectedfilenameListComponent,
    ImageExclusivesComponent,
    ProjectsummaryReportComponent,
    ImagenotesReportComponent,
    ImagecaptionReportComponent,
    Taggingview1Component,
    Taggingview2Component,
    CurrentactivityReportComponent,
    TransactionReportComponent,
    AdvanceimageTaggingComponent,
    ActoreidReportComponent,
    DeliveryComponent,
    FoxarchiveDeliveryComponent,
    FinalizeUnfinalizeComponent,
    RejectionToggleComponent
    
  ],
  providers: [SidebarService],
  exports: [
  ]
})
export class DashboardModule {}
