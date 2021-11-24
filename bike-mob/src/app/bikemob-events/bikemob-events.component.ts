import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-bikemob-events',
  templateUrl: './bikemob-events.component.html',
  styleUrls: ['./bikemob-events.component.css']
})
export class BikemobEventsComponent implements OnInit {
  constructor() { }
  calendarEl: any;
  ngOnInit(): void {
    this.googleCalSetUp();
  }
  googleCalSetUp(){
    this.calendarEl = document.getElementById('calendar');
    let calendar = new Calendar(this.calendarEl, {
      initialView: 'dayGridMonth',
      plugins: [ googleCalendarPlugin ],
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek',
        center: 'title',
        right: 'prev,today,next'
      }, 
      titleFormat: { year: 'numeric', month: 'short' },
      googleCalendarApiKey: 'AIzaSyC2ZSubbhIc3zuaJl9qtG9IVQajGptb66A',
      events: {
        googleCalendarId: 'focobikemob@gmail.com'
      },
      eventColor: '#FF69B4',
      eventDisplay: 'block'
    });
    calendar.render();
    
  }
}
