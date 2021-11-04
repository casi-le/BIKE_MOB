import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mailchimp-using-angular';

  constructor(private http: HttpClient) {
    // configuration details
    const API_KEY = '00d8cdf92d36745ec80e05bbe8f9f566-us20';
    const AUDIENCE_ID = '46665XXXXX';
    const SEND_WELCOME = true;
    // subscriber details
    const SUBSCRIBER_EMAIL = 'ankit.codechintan@gmail.com';
    const FNAME = 'Ankit';
    const LNAME = 'Maheshwari';

    const URL = "https://us19.api.mailchimp.com/2.0/lists/subscribe.json?apikey=" + API_KEY + "&id=" + AUDIENCE_ID + "&email[email]=" + SUBSCRIBER_EMAIL + "&merge_vars[FNAME]=" + FNAME + "&merge_vars[LNAME]=" + LNAME + "&double_optin=false&send_welcome=" + SEND_WELCOME;
    // call HTTP get request
    this.http.get(URL).subscribe((success) => {
      console.log('success', success);
    }, (error) => {
      console.log('error', error);
    });
  }
}