import { Injectable } from "@angular/core";
import { getDatabase, ref, onValue} from "firebase/database";

@Injectable({
    providedIn: 'root'
})

export class getRef {
    getRef(){
        const db = getDatabase();
        const starCountRef = ref(db, 'mob-photos/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        return data;
        });
    }
}