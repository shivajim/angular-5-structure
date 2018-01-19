import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';

//Routing 
import { AppRouting } from './app.routing';
import { SessionStorageService } from 'ngx-webstorage';

// ngx-Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {
  ApiService,
  AuthGuard,
  AuthServerProvider,
  ProfilesService,
  SharedModule,
  UserService
} from './shared';

import { AppSettings } from './appSettings/appSettings';
import { Constants } from './appSettings/constant-settings';
import { ViewprojectService } from './dashboard/project/component/view-project/view-project.service';


// const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    DashboardModule,
    HttpClientModule,
    ProfileModule,
    AppRouting,
    SharedModule,
    SettingsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ApiService,
    AuthGuard,
    AuthServerProvider,
    ProfilesService,
    UserService,
    SessionStorageService,
    AppSettings,
    Constants,
    ViewprojectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
