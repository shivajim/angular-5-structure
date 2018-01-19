import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

declare var jQuery: any;
@Component({
  selector: 'fs-tab-bar-peojectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.scss']
})
export class ProjectInfoComponent implements OnInit {

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
