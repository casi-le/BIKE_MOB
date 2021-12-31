import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikemob-home',
  templateUrl: './bikemob-home.component.html',
  styleUrls: ['./bikemob-home.component.css']
})
export class BikemobHomeComponent implements OnInit {

  constructor() { }
  hoverEl: any;
  hoverP:any;

  ngOnInit(): void {
    this.hoverEl = document.getElementById('radicalH');
    this.hoverP=document.getElementById('radicalP')
  }
  applyHover(el: any, elP: any){
    if(this.hoverEl){
      this.hoverEl.classList.remove('currentHeader');
    }
    if(this.hoverP){
      this.hoverP.classList.remove('current');  
    }
   this.hoverEl = document.getElementById(el);
   this.hoverEl?.classList.add('currentHeader');
   this.hoverP = document.getElementById(elP);
   this.hoverP?.classList.add('current');
  }
}
