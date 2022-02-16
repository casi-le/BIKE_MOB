import { Injectable } from "@angular/core";
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
    providedIn: 'root'
})

export class insertRef {
    createRef(file:any){
        var db = getDatabase();
        var name = this.fileNameStrip(file.name);
       var st=set(ref(db, 'mob-photos/'+name), {
            imageName: file.name,
            date: Date()
          });
    }
    fileNameStrip(name:string){
        name = name.replace('.','');
        name= name.replace('#','');
        name = name.replace('$', '');
        name = name.replace('[', '');
        name = name.replace(']', '');
        return name;
    }


}