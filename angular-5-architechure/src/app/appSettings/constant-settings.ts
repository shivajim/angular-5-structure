/**
 * Constant Module 
 * To add constants and strings
 */

import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    ok_label: string;
    cancel_label: string;
    numberOfColumns: string;
    noOfImages: string;
    imageSize: string;
    
    constructor() {
        this.ok_label = "Ok";
        this.cancel_label = "Cancel";
        this.numberOfColumns = "3";  
        this.noOfImages = "20";
        this.imageSize  = "Large";
    }
}
