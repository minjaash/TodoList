import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,Route } from '@angular/router';

import {AddTaskComponent} from './add-task/add-task.component'
import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

//definig Route objects
let homeRoute:Route={path:"",component:AddTaskComponent}
let addTasksRoute:Route={path:"add-task",component:AddTaskComponent}
//For displaying Delete component in Tasks component
let tasksRoute:Route={path:"tasks",component:TasksComponent}
let editTaskRoute:Route={path:"edit-task",component:EditTaskComponent}
//For displaying Delete component in app component
//let deleteTaskRoute:Route={path:"delete-task",component:DeleteTaskComponent}
const routes: Routes = [homeRoute,tasksRoute,addTasksRoute,editTaskRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
