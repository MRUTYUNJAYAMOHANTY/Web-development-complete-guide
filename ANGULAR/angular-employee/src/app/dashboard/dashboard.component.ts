import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private obj: HttpClient) { }

  ngOnInit() {
    this.getjob();// to call on pageload
    this.getdashboard();
  }

  alljob: any[] = [];

  getjob() {
    var url = "https://jobswalkin.com/client/joblist.php";
    var input = { "id": localStorage.getItem("tno") };
    this.obj.post(url, input).subscribe(
      response => {
        this.alljob = response as string[];
      }

    );
  }

  dashboard: any[] = [];
  allprofile: any[] = [];
  
  getdashboard() {
    var url = "https://jobswalkin.com/client/dashboard.php";
    var input = { "id": localStorage.getItem("tno") };
    this.obj.post(url, input).subscribe(
      response => {
        this.dashboard = response as string[];

      });
  }
  
}
