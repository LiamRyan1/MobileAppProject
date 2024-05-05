import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks: any[] = [];
  constructor(private storage: Storage) {
    this.Load();
   }
   async Load() {
    const storage = await this.storage.create();///create storage
    const storedTasks = await storage.get('tasks');//retrieve any values previously stored
    if (storedTasks) {//check if storedTasks has anything within it if it does add them to the tasks array
      this.tasks = storedTasks;
    }
  }
  private async saveTasks() {
    await this.storage.set('tasks', this.tasks);
  }
  //add task to task array
  async addTask(task: any) {
    this.tasks.push(task);
    await this.saveTasks();//add new tasks to the storage
    console.log("Tasks after adding", this.tasks);
  }
   //get tasks array
   async getTasks():Promise <any[]> {
     console.log("Tasks after entering get method:", this.tasks);
    return this.tasks;
  }
}
