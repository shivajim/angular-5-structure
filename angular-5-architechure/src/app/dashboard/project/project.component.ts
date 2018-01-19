import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  toolbarToggle:boolean;

  constructor() { }

  ngOnInit() {
    console.log(" project call--------------");
    
  }
  toggleImgtoolbar(eventaction: any): void {
    this.toolbarToggle = !this.toolbarToggle;
    console.log(" HeaderMenus--------------");
    
}

}
