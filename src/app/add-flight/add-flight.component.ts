import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  origin=""
  destination=""
  capacity=""
  readvalue=()=>{
    let data ={
      "flightName":this.name,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }  
    console.log(data)
    this.myapi.putData(data).subscribe(
      (response)=>{

      }
    )
    alert("Succesfully added")
    this.capacity=""
    this.destination=""
    this.origin=""
    this.name=""
  }

  ngOnInit(): void {
  }

}
