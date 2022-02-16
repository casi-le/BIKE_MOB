import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikemobNavbarComponent } from './bikemob-navbar/bikemob-navbar.component';
import { BikemobHomeComponent } from './bikemob-home/bikemob-home.component';
import { BikemobFooterComponent } from './bikemob-footer/bikemob-footer.component';
import { BikemobEventsComponent } from './bikemob-events/bikemob-events.component';
import { BikemobFaqComponent } from './bikemob-faq/bikemob-faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BikemobInfoComponent } from './bikemob-info/bikemob-info.component';
import { SupportComponent } from './support/support.component';
import { BikemobPhotosComponent } from './bikemob-photos/bikemob-photos.component';
import { BikemobRoutesComponent } from './bikemob-routes/bikemob-routes.component';

//firebase
import {AuthService} from './authService';
var auth: AuthService = new AuthService();
auth.login();

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  googleCalendarPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    BikemobNavbarComponent,
    BikemobHomeComponent,
    BikemobFooterComponent,
    BikemobEventsComponent,
    BikemobFaqComponent,
    GalleryComponent,
    BikemobInfoComponent,
    SupportComponent,
    BikemobPhotosComponent,
    BikemobRoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule,
    FullCalendarModule // register FullCalendar with you app,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
