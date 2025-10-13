import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  editTask:any={}
  url="http://localhost:5000/";
  constructor(private ar:ActivatedRoute){

  }
    //assigning current values to editTask by parsing json
  ngOnInit(): void {
     this.ar.queryParams.subscribe(params=>{
      if(params && params['data']){
       this.editTask=JSON.parse(params['data']);
        //console.log("task to be editted ",this.editTask);
      }
  });
}
//defining updateTaskHandler to update the data in data base
updateTaskHandler(){
   axios.put(this.url+"update",this.editTask)
   .then(updatedTask=>{
    //console.log(updatedTask.data)
    alert("Task Updated");
   })
   .catch(err=>console.log(err))
}
}
