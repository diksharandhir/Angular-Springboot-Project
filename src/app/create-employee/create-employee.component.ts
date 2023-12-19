import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { error } from 'console';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  employee: Employee=new Employee();
  
  constructor(private employeeService: EmployeeService ,
    private router:Router){

    }

   ngOnInit():void{

    
   }/*({
      next:((data) =>console.log(data)),
      error:(err)=>console.log(err),
      complete:()=>console.log('completed')
    });*/
   /*(data=>{
      console.log(data);
      this.goToEmployeeList()
    },
    error =>console.log(error)); */
   saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
    {
      next:data=>{console.log(data);this.goToEmployeeList()},
      error:error=>console.log(error)
    }
    );
    
   
   } 
    
   

   goToEmployeeList(){
    this.router.navigate(['/employees']);

   }

   

   onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    
   }
   


  }
