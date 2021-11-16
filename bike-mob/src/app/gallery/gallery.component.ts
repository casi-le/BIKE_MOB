import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  constructor() { }
  imagesArray: any;
  ngOnInit(): void {
    this.imagesArray= new Array();
    var a = new Image(100, 100);
    a.src='../assets/images/bike_mob_header.jpg';
  
    this.imagesArray=[
      a
    ]

  }

}
