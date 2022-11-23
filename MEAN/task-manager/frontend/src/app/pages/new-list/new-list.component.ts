import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }
  createList(title:string){
    // this.taskService.createList(title).subscribe((response:any)=>{
    //  console.log(response);
    //    // Now we navigate to /lists/response._id
    // })
  }
}
