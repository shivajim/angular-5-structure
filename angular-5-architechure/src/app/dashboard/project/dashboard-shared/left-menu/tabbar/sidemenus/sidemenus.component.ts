import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

declare var jQuery: any;
@Component({
    selector: 'fs-tab-bar-menus',
    templateUrl: './sidemenus.component.html',
    styleUrls: ['./sidemenus.component.scss']
})
export class SideMenusComponent implements OnInit {
    constructor(
        private sessionStorageSer: SessionStorageService
    ) { }
    albumList: any;
    response: any;
    imageData: object;
    project_id: number;

    ngOnInit() {
        jQuery('.selectpicker').selectpicker({
        });
    }
}
