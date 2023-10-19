import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';
@Component({
  selector: 'app-practice-reactive',
  templateUrl: './practice-reactive.component.html',
  styleUrls: ['./practice-reactive.component.css']
})
export class PracticeReactiveComponent implements OnInit {

  constructor() { }

  projectForm: UntypedFormGroup;

  ngOnInit() {
    this.projectForm = new UntypedFormGroup({
      'projectName': new UntypedFormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new UntypedFormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new UntypedFormControl('critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
