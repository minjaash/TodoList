import { ChangeDetectorRef, Component, EventEmitter,  Input,  OnChanges,  OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css',
  
})
export class DeleteTaskComponent implements OnInit,OnChanges {
  taskToDelete:any
  showDeleteComp:boolean=true
  url="http://localhost:5000/";
  @Output('showDeleteEmitter')showDeleteEmitter:EventEmitter <any>=new EventEmitter();
  @Input()deleteTask:any
 
  
 

  
  
  constructor(private ar:ActivatedRoute,private router:Router){
    

  }

  ngOnInit(): void {
  //--------when using the activatedRoute and queryParams------    
      // this.ar.queryParams.subscribe(params=>{
      //   if(params && params['data']){
      //     this.taskToDelete=JSON.parse(params['data'])
          
      //    console.log(this.taskToDelete)
      //   }
      // })
      //for checking
    //   this.taskToDelete=this.deleteTask
    // console.log("deletedTask",this.delTask)
     

  }
  ngOnChanges(changes: SimpleChanges): void {
      this.taskToDelete=this.deleteTask
      console.log(this.taskToDelete)
  }

  //defining deleteTaskHandler to delete task from database.
  deleteTaskHandler() {
      
      
      // console.log(this.taskToDelete)
      axios.delete(this.url + "delete", {
          data: this.taskToDelete
      })
      .then(deletedTask => {
       alert("task deleted")
      })
      .catch(err => console.log(err));
      //for fetching left tasks from db
      this.showDeleteEmitter.emit(this.showDeleteComp)

      
    }
    

         
  }
 


