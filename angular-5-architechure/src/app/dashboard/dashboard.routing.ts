import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent} from './dashboard.component'
import { LauncherComponent }  from './launcher/launcher.component';
import { ProjectComponent }  from './project/project.component';

import { ViewProjectComponent } from './project/component/view-project/view-project.component';
import { TestSubprojectComponent } from './project/component/test-subproject/test-subproject.component';

import { AuthGuard} from '../shared'

const countryRoutes: Routes = [
	{ 
	  path: 'dashboard',
      component: DashboardComponent,
      children: [{
		   	path: '',
			 	component: LauncherComponent,
			 	canActivate: [AuthGuard]
		},{
				path: 'viewproject/:project_id',
				component: ProjectComponent,
				children:[{
					path: '',
					component: ViewProjectComponent
				},{
					path: 'image',
					component: TestSubprojectComponent
				}]
			 	
		}
	  ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(countryRoutes) ],
  exports: [ RouterModule ]
})
export class DashboardRouting{ }
