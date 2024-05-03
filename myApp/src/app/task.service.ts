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
    console.log("Tasks after adding", this.tasks);
  }
   //get tasks array
   getTasks(): any[] {
     console.log("Tasks after entering get method:", this.tasks);
    return this.tasks;
  }
}
