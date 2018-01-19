import { Injectable, Inject } from '@angular/core';
import { Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from '../../../../../appSettings/appSettings';
import { Constants } from '../../../../../appSettings/constant-settings';
import { ApiService } from '../../../../../shared/services/api.service';


@Injectable()
export class ViewsettingsService {
    
    private viewSetting = new BehaviorSubject<object>({});
    cast = this.viewSetting.asObservable();

    constructor(
        private apiService: ApiService,
        private contant: Constants
    ) { }
    
    setViewSetting(viewSetting){
         this.viewSetting.next(viewSetting);
    }

    /* TODO: Implement this view settings api */
    getViewSettingsAPI(project_id: any): Observable<any> {
        var path = AppSettings.PROJECT_DATA + project_id;
        return this.apiService.get(path)
            .map(res => { return res.json(); });
    }
}
