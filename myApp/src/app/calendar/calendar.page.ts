import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonNote, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons,IonItem,IonList,IonNote,IonLabel]
})
export class CalendarPage implements OnInit {
  holidays:any = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.GetApiData().subscribe((data)=>{
      this.holidays = data['england-and-wales'].events;
    });
  }

}
