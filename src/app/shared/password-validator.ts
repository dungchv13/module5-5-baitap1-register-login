import {AbstractControl} from '@angular/forms';

export function PasswordValidator(control: AbstractControl): {[key: string]: any} | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if(password?.pristine || confirmPassword?.pristine){
    return null;
  }
  if (password && confirmPassword && password.value != confirmPassword.value){
    return { 'misMatch': true };
  }
  return null;
}
