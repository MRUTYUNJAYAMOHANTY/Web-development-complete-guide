import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  fullname: string;
  tokenno: string;

  ngOnInit() {
    this.fullname = localStorage.getItem("name");
    this.tokenno = localStorage.getItem("tno");
  }
  
  logout() {
    localStorage.setItem("name", "");
    localStorage.setItem("tno", "");
    window.location.href = "../";
  }

}
