import { Component, Input } from '@angular/core';
import { Errors } from './models';

@Component({
  selector: 'list-errors',
  templateUrl: './list-errors.component.html'
})
export class ListErrorsComponent {
  isError: boolean =false;
  formattedErrors: Array<string> = [];
  
  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.message){
        this.isError = true ;
        this.formattedErrors.push(`${errorList.message}`);
    }else{
      this.isError = false ;
    }
  };

  get errorList() { return this.formattedErrors; }


}
