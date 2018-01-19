import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EventListener } from '@angular/core/src/debug/debug_node';
declare var jQuery: any;

@Component({
    selector: 'fs-download',
    templateUrl:'./download.component.html',
    styleUrls:['./download.component.scss']
})

export class DownloadComponent implements OnInit {
    ngOnInit(){
        jQuery('.selectpicker').selectpicker({
        });
        
    }
}