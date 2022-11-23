import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: string;
  msgstatus: boolean = false;
  constructor(private obj: HttpClient) { }

  ngOnInit() {
  }

  serverResponse;
  login(uname: string, pass: string) {
    if ((uname != "") && (pass != "")) {

      var input = { "email": uname, "password": pass };

      var url = "https://jobswalkin.com/index.php/client/login.php";
      this.obj.post(url, input).subscribe(
        response => {
          this.serverResponse = response as string[];
          if (this.serverResponse.id == "") {
            this.msg = "Invalid or not Exists !";
            this.msgstatus = true;
          }

          else {
            localStorage.setItem("name", this.serverResponse.name);// string uname in localstorage
            localStorage.setItem("tno", this.serverResponse.id);
            window.location.reload();
          }
          
        }
      )

    }

    else {
      this.msg = " Empty Username  or password !";
      this.msgstatus = true;
    }

  }
}

