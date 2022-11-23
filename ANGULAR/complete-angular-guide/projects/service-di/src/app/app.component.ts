import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  accounts:{name:string,status:string}[]=[];

  constructor(private accountService:AccountsService){}
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
