import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons,IonItem,IonList,IonLabel,IonInput,IonSelect,IonSelectOption,IonTextarea,IonButton]
})
export class ToDoListPage implements OnInit {
  taskTitle: string = "";
  priority: number = 0;
  category:string = "";
  date:string = "";
  description:string = "";
  tasks: any[] = [];
  constructor() { }

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
    //push object task to the tasks array
    this.tasks.push(task);
    
    this. taskTitle = '';
    this.priority = 0;
    this.category = '';
    this. date = '';
    this.description = '';
      alert("task added");
  }
}
