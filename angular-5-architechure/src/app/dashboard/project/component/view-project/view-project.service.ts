import { Injectable, Inject } from '@angular/core';
import { Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
//import { Http } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { AppSettings } from '../../../../appSettings/appSettings';
import { Constants } from '../../../../appSettings/constant-settings';
import { ApiService } from '../../../../shared/services/api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



/*
  Generated class for the DbService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ViewprojectService {
    
    private imageData = new BehaviorSubject<object>({});
    cast = this.imageData.asObservable();

    constructor(
        private apiService: ApiService,
        private contant: Constants
    ) { }
    
    setImageListData(imageData){
         this.imageData.next(imageData);
    }
    /* Load selected project data */
    getProjectData(project_id: any): Observable<any> {
        var path = AppSettings.PROJECT_DATA + project_id;
        return this.apiService.get(path)
            .map(res => { return res.json(); });
    }

    getAlbumData(data: any): Observable<any> {
        var path = AppSettings.ALBUM_IMAGES +'/'+ data.project_id +'/'+ data.album_id;
        return this.apiService.get(path)
            .map(res => { return res.json(); })
    }

    // addImagesToAlbum(data: any):Observable<any>{
    //     var path = AppSettings.ALBUM_IMAGES;
    //     return this.restService.postCall(path,data,true, null)
    //     .map(res =>res.json()).catch(this.handleError);
    // }

}
