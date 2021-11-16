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
        image: 'https://drive.google.com/uc?export=view&id=1g-qcCUnmCsV4Beg1LT0h0jazI1u0JA7G',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1g-qcCUnmCsV4Beg1LT0h0jazI1u0JA7G',
        alt: 'Image 1'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=1cLR38i60m99BFpRzhGY6PQ3ZY8E0ipQZ',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1cLR38i60m99BFpRzhGY6PQ3ZY8E0ipQZ',
        
        alt: 'Image 2'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=1nze-cheituxDa0QzoMU7Ba88WdHA__Q6',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1nze-cheituxDa0QzoMU7Ba88WdHA__Q6',
        alt: 'Image 3'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=1c2JTacq-UpX16Wxv4Q5d2kkqPXL3ZsaW',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1c2JTacq-UpX16Wxv4Q5d2kkqPXL3ZsaW',
        
        alt: 'Image 4'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=1FHv1icynwuD_Z15hq6LEmuYmiumbZVXr',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1FHv1icynwuD_Z15hq6LEmuYmiumbZVXr',
        alt: 'Image 5'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=1EkLwoJw6tJ7uohW1B6e-IdE0famZft7f',
        thumbImage: 'https://drive.google.com/uc?export=view&id=1EkLwoJw6tJ7uohW1B6e-IdE0famZft7f',
        alt: 'Image 6'
      }, {
        image: 'https://drive.google.com/uc?export=view&id=14B-aN2vvEXPc7gg-BnAO2kBSpU1308Ye',
        thumbImage: 'https://drive.google.com/uc?export=view&id=14B-aN2vvEXPc7gg-BnAO2kBSpU1308Ye',
        alt: 'Image 5'
      }   
  ];

  }

}
