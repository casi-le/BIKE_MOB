import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private ajax: AjaxService) { }

  ngOnInit(): void {
    console.log('here')
    fetch('https://www.meetup.com/focobikemob/events/').then(response =>{
      console.log(response);
    })
  }

}
