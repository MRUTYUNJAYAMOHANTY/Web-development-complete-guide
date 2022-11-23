import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.css']
})

export class NewRequirementComponent implements OnInit {

  constructor(private obj: HttpClient) { }

  ngOnInit() {
    this.getjob();// to call on pageload
  }

  title: string;
  city: string;
  jd: string;
  minsal: number;
  maxsal: number;
  serverRes;
  msg: string;

  postData() {
    var url = "https://jobswalkin.com/client/postjobapi.php";
    var input = {
      "title": this.title,
      "city": this.city,
      "jd": this.jd,
      "minsal": this.minsal,
      "maxsal": this.maxsal,
      "id": localStorage.getItem("tno")
    }

    this.obj.post(url, input).subscribe(response => {
      this.serverRes = response as string[];
      this.msg = this.serverRes.status;
      this.title = "";
      this.city = "";
      this.jd = "";
      this.minsal = 0;
      this.maxsal = 0;
    });
  }

  blocksts: boolean = true;
  enableblock(input: string) {
    if (input == "P") {
      this.blocksts = false;
    } else {
      this.blocksts = true;
      this.getjob();// to reload the list
    }
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
  
}
