import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';


export class PasswordValidator {

  static MatchPassword(AC: AbstractControl) {
     const password = AC.get('password').value;
     const confirmPassword = AC.get('cpassword').value;
      if (password !== confirmPassword || confirmPassword === '' || password === '') {
          console.log('Password either does not match or is empty');
          AC.get('cpassword').setErrors( {MatchPassword: true} );
      } else {
          console.log('Password matches');
          return null;
      }
  }
}
