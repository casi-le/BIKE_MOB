import { Component, OnInit } from '@angular/core';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { insertRef } from "../insertRef";
import * as database from "firebase/database";
@Component({
  selector: 'app-bikemob-upload',
  templateUrl: './bikemob-upload.component.html',
  styleUrls: ['./bikemob-upload.component.css']
})
export class BikemobUploadComponent implements OnInit {

  constructor() { }
  fileToUpload: any;
  fileArray: any[] =[];
  ngOnInit(): void {
    this.getRef();
  }
  getRef(){
    const db = database.getDatabase();
    const starCountRef = database.ref(db, 'mob-photos/');
    database.onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    for(var i=0; i<Object.keys(data).length;i++){
      var x =Object.values(data)[i]
      this.fileArray.push(x)
      // console.log(x);
    }
    this.fileArray= this.fileArray.sort((a,b)=>{
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA.valueOf()-dateB.valueOf();
    })
    console.log(this.fileArray)
    });
  }
  onImgChange(input:any){
    console.log(input.files[0]);
    this.fileToUpload=input.files[0];
  }
  fileUpload(){
    // Create a root reference
    // const storage = getStorage();
    // const storageRef = ref(storage, 'gallery/'+this.fileToUpload.name);
    // // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, this.fileToUpload).then((snapshot) => {
    //   console.log(snapshot);
    //   var ref1 = new insertRef();
    //    ref1.createRef(this.fileToUpload)
    // });
  }

}
