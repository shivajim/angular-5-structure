import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../dashboard-shared/left-menu/sidebar-service/sidebar-service'
import { ViewprojectService } from 'app/dashboard/project/component/view-project/view-project.service';
import { SessionStorageService } from 'ngx-webstorage';

declare var jQuery: any;
@Component({
  selector: 'fs-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService,
    private viewprojectSer: ViewprojectService,
    private sessionStorageSer: SessionStorageService
  ) { }

  albumList: any;
  response: any;
  imageData: object;
  project_id: number;

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
    });

    this.sidebarService.cast.subscribe(albumlist => {
      this.albumList = albumlist;
    });
  }

  loadAlbumImages(album: any): void {
    //this.sessionStorageSer.store('albumId', album.id);
    let projectData =  {
      "project_id": "3247206",
      "album_id": album.id
    }
    this.viewprojectSer.getAlbumData(projectData).subscribe(
      res => {
        this.viewprojectSer.setImageListData(res.imageData);
      }
    )
  }
}
