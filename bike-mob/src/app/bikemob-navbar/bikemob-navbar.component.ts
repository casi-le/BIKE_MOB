import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikemob-navbar',
  templateUrl: './bikemob-navbar.component.html',
  styleUrls: ['./bikemob-navbar.component.css']
})
export class BikemobNavbarComponent implements OnInit {
  navbar: any;
  sticky: any;
  constructor() { }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    // console.log($event);
    // console.log("scrolling");
    // console.log(this.navbar);
    if(window.pageYOffset>=this.sticky){
      this.navbar?.classList.add('sticky');
    }else{
      this.navbar?.classList.remove('sticky');
    }
  } 

  ngOnInit(): void {
    this.navbar =  document.getElementById("navbar");
    if(this.navbar){
      this.sticky= this.navbar.offsetTop +20;
    }
  }


}
