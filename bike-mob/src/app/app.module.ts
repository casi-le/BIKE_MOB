import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikemobNavbarComponent } from './bikemob-navbar/bikemob-navbar.component';
import { BikemobHomeComponent } from './bikemob-home/bikemob-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BikemobNavbarComponent,
    BikemobHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
