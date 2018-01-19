import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

declare var jQuery: any;
@Component({
  selector: 'fs-customfilter',
  templateUrl: './customfilter.component.html',
  styleUrls: ['./customfilter.component.scss']
})
export class CustomFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
    });
  }


}
