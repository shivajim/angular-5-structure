import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../../shared';
import { AuthGuard } from '../../shared';
declare var jQuery: any;

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})

export class LauncherComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,    
    private userService: UserService
  ) {
    console.log("this.route:-",this.route);
  }

  isAuthenticated: boolean;
  // listConfig: ArticleListConfig = new ArticleListConfig();
  tags: Array<string> = [];
  tagsLoaded = false;

  onSelectCategory(): void {
    
    //this.router.navigate(['/dashboard/viewproject']);
     this.router.navigate(['/dashboard/viewproject/12345']);
  }

  ngOnInit() {
    jQuery('.selectpicker').selectpicker({
    });    
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        // set the article list accordingly
        if (authenticated) {
        console.log("User Authenticated");
        }
      }
    );
  }
}


 