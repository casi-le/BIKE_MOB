import { Injectable } from "@angular/core";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9Zv42isPmqp8eOROhO1ujoMrU67a_lM",
  authDomain: "mob-photos.firebaseapp.com",
  projectId: "mob-photos",
  storageBucket: "mob-photos.appspot.com",
  messagingSenderId: "916396614395",
  appId: "1:916396614395:web:f901cc20d3dc263484465e",
  measurementId: "G-JBJB1RZG4W"
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    SCOPE = 'https://www.googleapis.com/auth/drive.photos.readonly';
    constructor(
    ) {
    }

    async login() {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

      }
}