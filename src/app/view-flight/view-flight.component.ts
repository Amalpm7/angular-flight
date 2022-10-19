import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putViewFlight()}
  putViewFlight=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.viewFlight=data
      }
    )
  }

  viewFlight:any=[]

  ngOnInit(): void {
  }

}
