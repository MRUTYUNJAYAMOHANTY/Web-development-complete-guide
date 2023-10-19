# ng_Version_Changes
Mapping Angular2+ Version changes

# ng cli v14 changes from v13
  > defaultProject key depricated in angular.json

  > JSON key which getting impacted in package.json / package-lock.json ng update @angular/cli@14 
    {
        "dependencies":{
            "@angular/animations": "^14.3.0",
            "@angular/common": "^14.3.0",
            "@angular/compiler": "^14.3.0",
            "@angular/core": "^14.3.0",
            "@angular/forms": "^14.3.0",
            "@angular/platform-browser": "^14.3.0",
            "@angular/platform-browser-dynamic": "^14.3.0",
            "@angular/router": "^14.3.0",
        },
        "devDependencies": {
        "@angular-devkit/build-angular": "^14.2.13",
        "@angular/cli": "^14.2.13",
        "@angular/compiler-cli": "^14.3.0",
        "ng-packagr": "^14.2.2"
        }
    }

  > In tsconfig.json 
    {
         "target": "es2020",
    }
    from "target": "es2017"

  >   Destructuring and Module imports

    import { FormControl } from '@angular/forms'; to 
    import { UntypedFormControl } from '@angular/forms';
    
    import { FormGroup } from '@angular/forms'; to
    import { UntypedFormGroup } from '@angular/forms';

    import { FormArray} from '@angular/forms';
    import { UntypedFormArray } from '@angular/forms';

  > Changes in Module file 
    
    entryComponents key is depricated from @NgModule class.
    
