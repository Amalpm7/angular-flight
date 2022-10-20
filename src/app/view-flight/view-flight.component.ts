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
  deleteFlight=(id:any)=>{
    let data={
      "id":id
    }

    this.myapi.deleteFlight(data).subscribe(
      (resp)=>{
        alert("Deleted")
      }
    )
    this.putViewFlight()
  }

  viewFlight:any=[]

  ngOnInit(): void {
  }

}
