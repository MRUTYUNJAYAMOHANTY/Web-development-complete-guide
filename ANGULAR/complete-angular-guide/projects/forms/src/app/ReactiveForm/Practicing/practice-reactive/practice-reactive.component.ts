import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';
@Component({
  selector: 'app-practice-reactive',
  templateUrl: './practice-reactive.component.html',
  styleUrls: ['./practice-reactive.component.css']
})
export class PracticeReactiveComponent implements OnInit {

  constructor() { }

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

}
