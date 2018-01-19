import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {
    private albumList = new BehaviorSubject<object>({});
    cast = this.albumList.asObservable();
    constructor(){}

    setAlbumList(albumList){
         this.albumList.next(albumList);
    }
}
