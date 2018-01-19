import {
  Component,
  OnInit,
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';


 


@Component({
  selector: 'fs-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
 
})
export class RightMenuComponent implements OnInit {
  expanded = false;
  expandedState = 'collapsed';

   
  constructor() { }

  ngOnInit() {
  }
 
toggleExpandedState() {
    this.expandedState = this.expanded ? 'collapsed' : 'expanded';
    this.expanded = !this.expanded;
}

}
