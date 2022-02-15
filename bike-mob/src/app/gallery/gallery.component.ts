import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  constructor() { }
  imgCollection: any;
  ngOnInit(): void {
    this.imgCollection = [
      {
        image: 'assets/images/DSC051826.jpg',
        thumbImage: 'assets/images/DSC051826.jpg',
        alt: 'Bike Mob Trailer in front of Mobb'
      }, {
        image: 'assets/images/DSC05303.jpg',
        thumbImage: 'assets/images/DSC05303.jpg',
        
        alt: 'People on bikes downtown'
      }, {
        image: 'assets/images/DSC05229.jpg',
        thumbImage: 'assets/images/DSC05229.jpg',
        alt: 'Bikes taking off from Mobb'
      } 
  ];

  }

}
