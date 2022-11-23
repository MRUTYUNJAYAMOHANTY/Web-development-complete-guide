import { Component } from '@angular/core';
import  Employees  from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'employee-details';
 
  public employeeDetails:{name:string,age:number,email:string,departments:string[]}[] = Employees;

  public allEmployees = [...this.employeeDetails];
  public depvalue:string[]  = ["Chemistry","Physics","Computer"] ;
  
   selectedDep : string = '';
  empField : string ;

  public SortBy = [{name:'name(a-z)'},{name:'name(z-a)'},{name:'age'},{name:'email'}];
  sortByselected= this.SortBy[0].name;
  selectedSort: string ;
   
  constructor(){}

  ngOnInit(){
    this.employeeDetails;
     
    // console.log("employeeDetails==" + JSON.stringify(this.employeeDetails));  
    this.employeeDetails.sort((a,b) => {
          return a.name.localeCompare(b.name)
        } );
    }   
    
    sortBy(event:any){
      this.selectedSort = event.target.value;
      if(this.selectedSort === "name(a-z)"){
        this.employeeDetails.sort((a,b) => {
          return a.name.localeCompare(b.name)
        } );
         
      }
      else if(this.selectedSort === "name(z-a)"){
        this.employeeDetails.sort((a,b) => {
          return b.name.localeCompare(a.name)
    
        } );
      }
      else if(this.selectedSort === "age"){
        this.employeeDetails.sort((a,b) => {
          return a.age-b.age;
    
        } );
      }
      else{
        this.employeeDetails.sort((a,b) => {
          return a.email.localeCompare(b.email)
        } );
    
      }
    }

    departmet(event:any){
      this.selectedDep = event.target.value; 
      this.employeeDetails= []; 
      if(this.selectedDep === "department")
      { 
        this.employeeDetails = this.allEmployees; 
        return; 
      }
      else{ 
        for(let i=0; i< this.allEmployees.length;i++)
        { 
          if(this.allEmployees[i].departments.includes(this.selectedDep) )
          { 
            this.employeeDetails.push(this.allEmployees[i]); 
          } 
        } 
      }
    }

    search(){
      if(this.empField.includes('@'))
      {
        this.employeeDetails = this.employeeDetails.filter(res => {
          return res.email.toLocaleLowerCase().match(this.empField.toLocaleLowerCase());
      })
      }else{
        this.employeeDetails = this.employeeDetails.filter(res => {
          return res.name.toLocaleLowerCase().match(this.empField.toLocaleLowerCase());
        })
      }
    }
    
    clear(){
      this.employeeDetails = this.allEmployees;
      this.sortByselected= this.SortBy[0].name;
      this.empField = '';
    }
  
}
