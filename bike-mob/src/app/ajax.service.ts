import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AjaxService{
    constructor(private http:HttpClient){

    }
    public getMeetupEvents(){
        let headers= new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        });
        return this.http.get('https://www.meetup.com/focobikemob/events/', {headers: headers});
    }
}