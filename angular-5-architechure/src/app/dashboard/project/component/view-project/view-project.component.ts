import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../shared';
import { ViewprojectService } from './view-project.service';
import { ApiService } from '../../../../shared/services/api.service';
import { AppSettings } from '../../../../appSettings/appSettings';
import { Project } from '../../../../shared/models/project.model';
 
import { SidebarService } from '../../dashboard-shared/left-menu/sidebar-service/sidebar-service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
  project: Project = new Project();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private viewprojectSer: ViewprojectService,
    private apiService: ApiService,
    private sidebarService: SidebarService,
    private sessionStorageSer: SessionStorageService
  ) { }
  isAuthenticated: boolean;
  response: any;
  showLoader: boolean;
  imageData: object;
  albumList: object;
  imageDataLenght: number;
  noOfImages: number = 10;
  currentPageNumber: number = 1;
  project_id: string = '3247206';
  totalPages: number;
  albumId: number;

  ngOnInit() {
    //this.albumId = this.sessionStorageSer.retrieve('albumId');
    this.sessionStorageSer.clear('albumId');
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        // set the article list accordingly
        if (authenticated) {
          console.log("User Authenticated view project");
        }
      }
    );

    if(this.albumId) {
      this.loadProjectAlbumData();
      console.log("Load project album");
    }
    else {
      this.loadProjectData();
      console.log("Load project");
    }

    this.viewprojectSer.cast.subscribe(imagesList => {
      this.setDataToGrid(imagesList);
    });
  }


  loadProjectData() {
    this.showLoader = true;
    this.viewprojectSer.getProjectData(this.project_id).subscribe(
      res => {
        this.project.status =  res.status;
        this.project.imageData = res.imageData;
        this.project.albumData = res.albumData;
     
        this.setDataToGrid(res.imageData);
        this.showLoader = false;
        this.albumList = res.albumData;
        this.sidebarService.setAlbumList(this.project.albumData);
        console.log("project album");
      },
      error => {
        console.log("Project data error --------");
      })
  }
  
  loadProjectAlbumData(){
    let projectData = {
      "project_id": this.project_id,
      "album_id": this.albumId
    }
    this.viewprojectSer.getAlbumData(projectData).subscribe(
      res => {
        this.setDataToGrid(res);
        console.log("Set project album");
      }
    )
  }

  setDataToGrid(imageData) {
    this.imageData = imageData;
    this.imageDataLenght = Object.keys(imageData).length;
    if(this.imageDataLenght> this.noOfImages){
      this.totalPages = Math.ceil(this.imageDataLenght / this.noOfImages);
    }
    else{
      this.totalPages = 1;
    }
  }

  fistPage(): void {
    this.currentPageNumber = 1;
  }
  lastPage(): void {
    this.currentPageNumber = this.imageDataLenght;
  }
}
