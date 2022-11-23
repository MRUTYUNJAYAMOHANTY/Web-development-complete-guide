import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private obj: HttpClient) { }

  ngOnInit() {
    this.getjob();// to call on pageload
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

  jobid: string;

  profile: any[] = [];
  getProfile(status: string) {
    // alert(status);
    this.profile = [];
    var url = "https://jobswalkin.com/hr/jobprofile.php";
    var input = {
      "clientid": localStorage.getItem("tno"),
      "jobid": this.jobid,
      "status": status
    };
    this.obj.post(url, input).subscribe(
      response => {
        this.profile = response as string[];
      }
    );
  }

  updateStatus(status: string, id: string) {
    var url = "https://jobswalkin.com/client/updatestatus.php";
    var input = {
      "clientid": localStorage.getItem("tno"),
      "jobid": this.jobid,
      "userid": id,
      "status": status
    };
    this.obj.post(url, input).subscribe(
      response => {
        this.getProfile(' '); // to relaod the list
      }
    );
  }
  
}
