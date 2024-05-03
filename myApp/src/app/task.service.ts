import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: any[] = [];
  constructor() { }
  //add task to task array
  addTask(task: any) {
    this.tasks.push(task);
   
  }
   //get tasks array
   getTasks(): any[] {
     console.log("Tasks after loading:", this.tasks);
    return this.tasks;
  }
}
