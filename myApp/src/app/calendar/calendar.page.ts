import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNote, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiService } from '../api.service';
import { TaskService } from '../task.service';
interface dates {
  date: string;
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons,IonItem,IonList,IonNote,IonLabel]
})
export class CalendarPage implements OnInit {
  holidays:any = [];
  tasks: any = [];
  constructor(private apiService:ApiService ,public taskService: TaskService ,) { }

  ngOnInit() {
    this.apiService.GetApiData().subscribe((data)=>{
      this.holidays = data['england-and-wales'].events;
      this. combineAndSortholidaysTasks();
    });
  }
  ionViewWillEnter() {
    console.log("Calendar initialized");
    this.loadTasks();
  }
  loadTasks() {
    console.log("Loading in calendar tasks...");
    this.tasks = this.taskService.getTasks();
    console.log("Tasks after loading in calendar:", this.tasks);
  }
  combineAndSortholidaysTasks() {
    if (this.holidays.length > 0 && this.tasks.length > 0) {
      //combine holidays and tasks arrays
      const  combineAndSortholidaysTasks = this.holidays.concat(this.tasks);
      
      //sort the combined array by date
      combineAndSortholidaysTasks.sort((a:dates, b:dates) => a.date.localeCompare(b.date));
      
      //update holidays array with sorted combined array
      this.holidays =  combineAndSortholidaysTasks;
    }
  }
}
