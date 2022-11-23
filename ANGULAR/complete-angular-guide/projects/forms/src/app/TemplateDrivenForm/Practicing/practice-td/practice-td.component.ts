import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice-td',
  templateUrl: './practice-td.component.html',
  styleUrls: ['./practice-td.component.css']
})
export class PracticeTdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm', { static: false }) sgnForm: NgForm;
  onSubmit() {
    console.log(this.sgnForm.value);
  }
}
