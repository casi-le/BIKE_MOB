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
      customButtons: {
        custom: {
          text: 'Calendar',
          click: function() {
            window.open('https://calendar.google.com/calendar/embed?src=focobikemob%40gmail.com&ctz=America%2FDenver', '_blank')?.focus()
          }
        }
      },
      plugins: [ googleCalendarPlugin ],
      headerToolbar: {
        left: 'dayGridMonth,timeGridWeek,custom',
        center: 'title',
        right: 'prev,next'
      }, 
      titleFormat: { year: 'numeric', month: 'short' },
      googleCalendarApiKey: 'AIzaSyC2ZSubbhIc3zuaJl9qtG9IVQajGptb66A',
      events: {
        googleCalendarId: 'focobikemob@gmail.com'
      },
      eventColor: '#FF69B4',
      eventDisplay: 'block',
      eventClick: function(info){
        info.jsEvent.preventDefault(); // don't let the browser navigate 
        var eventUrl = info.event.url;
        const ua = navigator.userAgent;
        var mobile = false;
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
          mobile = true;
        }
       if(mobile==true){
        if (eventUrl) {
          var index = eventUrl.indexOf('event');
          var endindex = 'event?eid='.length;
          var url = eventUrl.slice(0,index) + 'r/eventedit/copy/' + eventUrl.slice(index+ endindex, eventUrl.length)
          window.open(url, '_blank')?.focus();
        }
       }else{
         if(eventUrl){
          window.open(eventUrl, '_blank');
         }
       }     
      }
    });
    calendar.render();
  }
}
