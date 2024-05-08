import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonNote, IonTitle, IonToolbar,IonList} from '@ionic/angular/standalone';
import { TaskService } from '../task.service';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-duedate',
  templateUrl: './duedate.page.html',
  styleUrls: ['./duedate.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonButton,IonNote,IonLabel,IonItem,IonBackButton,IonList]
})
export class DuedatePage implements OnInit {

  constructor(public taskService: TaskService,private navCtrl: NavController) { }
  tasks: any[] = [];
  DaysUntilDue: number[] = []; 
  ngOnInit() {
  }
  async  ionViewWillEnter() {
    console.log("tasks page initialized");
   await this.loadTasks();
   this.daysUntilDue();
  }
  async loadTasks() {
    console.log("Loading tasks...");
    const tasksCopy =  await this.taskService.getTasks(); //copy the array
    this.tasks = tasksCopy.slice();//add copy to the task array
    this.tasks.sort((a, b) => b.priority - a.priority);//sort by priority
    console.log("Tasks after loading:", this.tasks);
  }
  daysUntilDue(){
    const currentDate = new Date();//get current date 
    this.tasks.forEach(task => {
      const dueDate = new Date(task.date);
      const timeDiff = dueDate.getTime() - currentDate.getTime();//converts both dates to miliseconds and get the time difference
      const daysUntilDue = Math.ceil(timeDiff / (1000 * 3600 * 24));//convert time difference from miliseconds to days
      this.DaysUntilDue.push(daysUntilDue);//add to daysildue array
      console.log("was called daysuntildue",this.DaysUntilDue);

    });
  }
}
