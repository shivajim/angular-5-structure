import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { EventListener } from '@angular/core/src/debug/debug_node';
import { SelectControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';



declare var jQuery: any;
// import { SessionstorageService } from '../../../providers/sessionstorageService/sessionstorageService';
// import { LocalstorageService } from '../../../providers/localstorageService/localstorageService';
import { Constants } from '../../../../../appSettings/constant-settings';

@Component({
    selector: 'fs-viewsettings',
    templateUrl: './viewsettings.component.html',
    styleUrls: ['./viewsettings.component.scss']
})

export class ViewsettingsComponent implements OnInit {

    constructor(
        // private sessionstorageService: SessionstorageService,
        // private localsStorageSrc: LocalstorageService, 
        private constants: Constants,
        private translate: TranslateService,

    ) { }

    selectedSizes: any;
    selectedImages: any;
    selectedColumns: any;
    test: boolean = false;
    defaultSetting: any;

    imageSize = [
        { id: 1, name: 'Large' },
        { id: 2, name: 'Small' },
        { id: 3, name: 'Medium' }];

    dataImages = [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '4' },
        { id: 4, name: '10' },
        { id: 5, name: '20' },
        { id: 6, name: '50' },
        { id: 7, name: '100' },
        { id: 8, name: '250' }
    ];
    dataColumns = [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' },
        { id: 7, name: '7' },
        { id: 8, name: 'Auto' }
    ];
    ngOnInit() {
        jQuery('.selectpicker').selectpicker({});
        this.selectedColumns = this.constants.numberOfColumns;
        this.selectedImages = this.constants.noOfImages;
        this.selectedSizes = this.constants.imageSize;
    }
}
