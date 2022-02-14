import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authService';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-bikemob-photos',
  templateUrl: './bikemob-photos.component.html',
  styleUrls: ['./bikemob-photos.component.css']
})
export class BikemobPhotosComponent implements OnInit {
 
  constructor(){ 
  }
  imagesToShow: string[]=[];
  ngOnInit(): void {
    
  }

  async ngAfterViewInit(): Promise<void> {
    //google api:
    //AIzaSyDg6ZrE1ovEs_w8Lo7_Y7zYON5ueCxLWBs
    var auth: AuthService = new AuthService();
    await auth.login();
    this.listStorage();
    
  }
  listStorage(){
    const storage = getStorage();
    // Create a reference under which you want to list
    const listRef = ref(storage, 'gallery');
    // console.log(listRef)
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
          res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
          // All the items under listRef.
          // console.log(itemRef.fullPath)
          this.getDownloads(itemRef.fullPath)
          });
      }).catch((error) => {
          // Uh-oh, an error occurred!
    });
  }
  getDownloads(path: string){
    const storage = getStorage();
    getDownloadURL(ref(storage, path))
    .then((url) =>{
      // console.log(url);
      this.imagesToShow.push(url);
      // console.log(this.imagesToShow)
    }).catch((error) => {
      // Handle any errors
    });
  }
}
