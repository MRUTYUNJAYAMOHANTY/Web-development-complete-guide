# ng_Version_Changes with change of major version cli (migration to next major version)
Mapping Angular2+ Version changes

ng update @angular/cli@14 --force
Above 14 is major version name . It can be any numer i.e which major version is going to be updated

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
    
# ng cli v15 changes from v14

  > .browserslistrc got depricated

  > Below sections in test.ts got depricated

    declare const require: {
      context(path: string, deep?: boolean, filter?: RegExp): {
        <T>(id: string): T;
        keys(): string[];
      };
    }; 
    // Then we find all the tests.
     const context = require.context('./', true, /\.spec\.ts$/);
    // And load the modules.
     context.keys().map(context);

   > In tsconfig.json JSON key for "compilerOptions" > "target" got modified . And a new key
     added as "useDefineForClassFields": false 

    {
      "compilerOptions": {
        target": "ES2022"
      },
      "useDefineForClassFields": false   
    }
    from "target": "es2020"

  > JSON key which getting impacted in package.json / package-lock.json ng update @angular/cli@15 
    {
      "dependencies": {
          "@angular/animations": "^15.2.10",
          "@angular/common": "^15.2.10",
          "@angular/compiler": "^15.2.10",
          "@angular/core": "^15.2.10",
          "@angular/forms": "^15.2.10",
          "@angular/platform-browser": "^15.2.10",
          "@angular/platform-browser-dynamic": "^15.2.10",
          "@angular/router": "^15.2.10"
          },
      "devDependencies": {
          "@angular-devkit/build-angular": "^15.2.10",
          "@angular/cli": "^15.2.10",
          "@angular/compiler-cli": "^15.2.10",
          "ng-packagr": "^15.2.2",
          "typescript": "~4.9.5"
          }
    }
    
# ng cli v16 changes from v15

