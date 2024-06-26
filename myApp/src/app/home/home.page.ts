import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonNote} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,RouterLink,IonList,IonItem,IonLabel,CommonModule,IonButton,IonNote],

})
export class HomePage {
  tasks: any[] = [];
  constructor(public taskService: TaskService ,private navCtrl: NavController) {}
  
 async  ionViewWillEnter() {//everytime the homepage is viewed runs this
    console.log("HomePage initialized");
   await this.loadTasks();
  }
  async loadTasks() {
    console.log("Loading tasks...");
    const tasksCopy =  await this.taskService.getTasks(); //copy the array
    this.tasks = tasksCopy.slice();//add copy to the task array
    this.tasks.sort((a, b) => b.priority - a.priority);//sort by priority
    console.log("Tasks after loading:", this.tasks);
  }
}
