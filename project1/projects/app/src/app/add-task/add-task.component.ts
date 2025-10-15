import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 task:any={
  Work:""
 };
   url = environment.apiUrl;
 addTaskHandler(){
  // axios.post(this.url+"add-task/"+this.task,).then((data)=>{console.log(data)
  axios.post(this.url+"add-task",this.task)
    .then((data)=>{
            //console.log(data.data)
            alert("task saved");
  })
    .catch((err)=>
    console.log(err)
    );
  //empty the this.task after post request
    this.task.Work="";
 }
}
