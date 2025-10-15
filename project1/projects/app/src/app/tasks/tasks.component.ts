import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import axios from 'axios';
import { Router} from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  constructor(private router:Router){
    this.showDelete=true
    
  }
  
  showDelete:boolean;
  showTasks:boolean=false
 
  //for storing tasks from db
  storedTasks:any =[];
  //for storing left tasks after deleting tasks from db
  leftTasks:any=[];
  //for Looping
  storedLeftTasks:any=[]
  url=environment.apiUrl;
  editTask: any={};
  deleteTask:any;
  
  



  ngOnInit(): void {
      axios.get(this.url+"tasks")
      .then((res)=>{
        this.storedTasks=res.data;
        //console.log("tasks fetched");
        // storedTasks stores the data response from the server
       // console.log(this.storedTasks);
  })
      .catch(err=>console.log(err)) 
      
     }

     
     //defining editTaskHandler method
     editTaskHandler(_id:any){
      let tempId={id:_id};
      //recieving the task to be editted from the database and storing in editTask
      axios.post(this.url+"edit",tempId).then((res)=>{
        this.editTask=res.data;
        //console.log("edit task recieved",JSON.stringify(this.editTask));
        //creating an object to send to the edit-task api
       const queryParams={
          data:JSON.stringify(this.editTask)
        }
        //passing the queryParams object as parameter to edit-task route during navigation
        this.router.navigate(['/edit-task'],{queryParams})
        
       }) 
       .catch(err=>console.log(err))

     }
    //defining deleteTaskHandler() method
     deleteTaskHandler(taskToDelete:any){
      // axios.post(this.url+"/delete",_id).then((res)=>{
      //     alert("task deleted")
      //creating an object to send to the delete task api
        // const queryParams={
        //   data :JSON.stringify(taskToDelete)
        // }
        // this.router.navigate(['/delete-task'],{queryParams})
       
        this.deleteTask=taskToDelete
        console.log("task to be deleted",this.deleteTask)
        this.showDelete=!this.showDelete
        this.showTasks=!this.showTasks
        
        //this.reloadComponent()
      }
     

    //for recieving event from delete-task component  
      showDeleteListener(evt:any){
        this.showDelete=!evt.showDeleteComp
        this.showTasks=evt.showDeleteComp
        
      }

    //for recieving showLeftTaskEvent from delete-task component
    
   
     
}
      

  


