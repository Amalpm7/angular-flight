import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData=()=>{
    return this.http.get("http://localhost:8080/viewFlight")

  }
  putData=(data:any)=>{
    return this.http.post("http://localhost:8080/addFlight",data)
  }
  deleteFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteflight",data)
  }
  searchFlight=(data:any)=>{
    return this.http.post("http://localhost:8080/searchFlight",data)
  }
}
