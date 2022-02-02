import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikemobEventsComponent } from './bikemob-events/bikemob-events.component';
import { BikemobFaqComponent } from './bikemob-faq/bikemob-faq.component';
import { BikemobHomeComponent } from './bikemob-home/bikemob-home.component';
import { BikemobInfoComponent } from './bikemob-info/bikemob-info.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  //todo add 404 page
  {path: 'home', component: BikemobHomeComponent},
  {path: 'events', component: BikemobEventsComponent},
  {path: 'faqs', component: BikemobFaqComponent},
  {path: 'info', component:BikemobInfoComponent},
  {path: 'support', component:SupportComponent},
  {path : '**', component: BikemobHomeComponent},
  {path: '', component: BikemobHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: false, 
    anchorScrolling: 'enabled', 
    onSameUrlNavigation: 'reload', 
    scrollOffset: [0, 150],
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
