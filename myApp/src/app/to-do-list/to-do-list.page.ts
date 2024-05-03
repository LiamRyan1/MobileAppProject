import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, } from '@ionic/angular/standalone';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
  standalone: true, 
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons,IonItem,IonList,IonLabel,IonInput,IonSelect,IonSelectOption,IonTextarea,IonButton,IonList]
})
export class ToDoListPage implements OnInit {
  taskTitle: string = "";
  priority: number = 0;
  category:string = "";
  date:string = "";
  description:string = "";
  tasks: any[] = [];
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }
  addTask()
  {
    if (!this.taskTitle || !this.priority || !this.category || !this.date || !this.description) {
      alert("All fields must be filled");
      return;
    }
    //object task
    const task = {
      title: this.taskTitle,
      priority: this.priority,
      category: this.category,
      date: this.date,
      description: this.description
    };
    //call the addTask method of taskservice to add the task
    this.taskService.addTask(task);
    //reset back to default for the next task to be added
    this. taskTitle = '';
    this.priority = 0;
    this.category = '';
    this. date = '';
    this.description = '';
    alert("task added");
  }
}
