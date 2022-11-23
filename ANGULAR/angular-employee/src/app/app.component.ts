import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  login: boolean = false;
  fullname: string;
  tokenno: string;

  ngOnInit() {
    this.fullname = localStorage.getItem("name");
    this.tokenno = localStorage.getItem("tno");
    if ((this.fullname != "") && (this.fullname != null)) {
      this.login = true;
    }
  }

}
