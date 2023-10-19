import { UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
  static invalidProjectName(control: UntypedFormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    }
    return null;
  }

  static asyncInvalidProjectName(control: UntypedFormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
    return promise;
  }
}
