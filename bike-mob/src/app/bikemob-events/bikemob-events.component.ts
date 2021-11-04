import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bikemob-events',
  templateUrl: './bikemob-events.component.html',
  styleUrls: ['./bikemob-events.component.css']
})
export class BikemobEventsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
