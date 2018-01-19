import { Component, OnInit ,Output, EventEmitter  } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'fs-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

    constructor(private translate: TranslateService){}
    
  ngOnInit(){
    
        }
        @Output() notify:EventEmitter<any> = new EventEmitter<any>();
        showAll():void{
            this.notify.emit(" Component called");
        }
        @Output() showasidemenu:EventEmitter<any> = new EventEmitter<any>();
        aside_show():void{
            this.showasidemenu.emit(true);
        }

}
