import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent{
  constructor(private router:Router){
 
  }
  title = 'app';

  reloadTasks() {
    // Navigate to the same route to reload the component
    this.router.navigateByUrl('/tasks', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
  

 

  
}
