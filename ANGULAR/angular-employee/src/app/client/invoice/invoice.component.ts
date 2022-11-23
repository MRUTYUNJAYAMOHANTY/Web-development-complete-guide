import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private obj: HttpClient) { }

  ngOnInit() {
    this.getinvoice();
  }
  allinvoice: any[] = [];
  getinvoice() {
    var url = "https://jobswalkin.com/client/invoice.php";
    var input = { "id": localStorage.getItem("tno") };
    this.obj.post(url, input).subscribe(
      response => {
        this.allinvoice = response as string[];

      });
  }
}
