import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: any[] = [];
  constructor() { }
  //add task to task array
  addTask(task: any) {
    this.tasks.push(task);
  }
}
