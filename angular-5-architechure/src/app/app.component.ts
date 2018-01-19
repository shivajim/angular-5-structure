import { Component, OnInit } from '@angular/core';

import { UserService } from './shared';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en','fr','es']);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    translate.use('en');
  }

  ngOnInit() {
    this.userService.populate();
  }
}
