import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor() { }
  viewFlight=[{"id":1,"flightName":"Indian Airways","origin":"Kannur","destination":"LA","capacity":250},{"id":2,"flightName":"Air India","origin":"Bangalore","destination":"Sree Lanka","capacity":159},{"id":3,"flightName":"Air India","origin":"Mumbai","destination":"China","capacity":147}]

  ngOnInit(): void {
  }

}
