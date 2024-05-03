import { Component} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,RouterLink,IonList,IonItem,IonLabel,CommonModule,IonButton],

})
export class HomePage {
  tasks: any[] = [];
  constructor(public taskService: TaskService ,private navCtrl: NavController) {}
  ionViewWillEnter() {
    console.log("HomePage initialized");
    this.loadTasks();
  }
  loadTasks() {
    console.log("Loading tasks...");
    this.tasks = this.taskService.getTasks();
    console.log("Tasks after loading:", this.tasks);
  }
}
