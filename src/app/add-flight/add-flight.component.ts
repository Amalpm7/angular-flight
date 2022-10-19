import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor() { }
  name=""
  origin=""
  destination=""
  capacity=""
  readvalue=()=>{
    let data ={
      "name":this.name,
      "origin":this.origin,
      "destination":this.destination,
      "capacity":this.capacity
    }  
    console.log(data)
  }

  ngOnInit(): void {
  }

}
