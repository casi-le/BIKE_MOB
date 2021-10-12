import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikemobNavbarComponent } from './bikemob-navbar/bikemob-navbar.component';
import { BikemobHomeComponent } from './bikemob-home/bikemob-home.component';
import { BikemobFooterComponent } from './bikemob-footer/bikemob-footer.component';
import { BikemobEventsComponent } from './bikemob-events/bikemob-events.component';
import { BikemobFaqComponent } from './bikemob-faq/bikemob-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    BikemobNavbarComponent,
    BikemobHomeComponent,
    BikemobFooterComponent,
    BikemobEventsComponent,
    BikemobFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
