import { NO_ERRORS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models';
import { UserService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'fs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _componentVisible: boolean;
  languages = ['English', 'français', 'Español'];
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        console.log("currentUser==", JSON.stringify(this.currentUser));

      }
    )
  }

  signOut():void{
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}
