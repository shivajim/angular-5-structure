import { Component, OnInit, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
@Component({
    selector: 'fs-printtool',
    templateUrl:'./printtool.component.html',
    styleUrls:['./printtool.component.scss']
})

export class PrinttoolComponent implements OnInit {
    ngOnInit(){
        jQuery('.selectpicker').selectpicker({
        });
    }
}