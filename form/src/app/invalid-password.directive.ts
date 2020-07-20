import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';


@Directive({
  selector: '[appInvalidPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => InvalidPasswordDirective)}]
})


export class InvalidPasswordDirective {

  constructor() { }

  validate(c: FormControl){
    if(c.value ==='1234'){
      return {error: 'invalid password'};
    } else {
      return null;
    }
  }
}
