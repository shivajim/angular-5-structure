import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Errors, UserService } from '../shared';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../shared/models';


const LANG = [
  new Language('English', 'Français', 'Espanol')
];

@Component({
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})


 
export class AuthComponent implements OnInit {
  language: Language;
  authType: String = '';
  title: String = '';
  errors: Errors = new Errors();
  isSubmitting = false;
  authForm: FormGroup;

    constructor(
      private translate: TranslateService,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private fb: FormBuilder
    )
    {
      console.log("===>", LANG[0].en);
      this.authForm = this.fb.group({
        'username': ['', Validators.required],
        'password': ['', Validators.required]
      });
    }

    ngOnInit(): void {
      this.route.url.subscribe(data => {
        this.authType = 'login';
        this.title = 'Sign in';
      });
    }
    
    submitForm(){
      this.isSubmitting = true;
      this.errors = new Errors();
  
      const credentials = this.authForm.value;
      this.userService
      .attemptAuth('auth/login', credentials)
      .subscribe(
        data => {
          if(data.status)
          this.router.navigateByUrl('/dashboard')
        },
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
    }
}
