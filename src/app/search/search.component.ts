import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  flightName=""
  readvalue=()=>{
    let data={
      "flightName":this.flightName
    }
    console.log(data)
    this.myapi.searchFlight(data).subscribe(
      (response)=>{
        this.searchFlight=response
      }
    )
  }
  

  searchFlight:any=[]

  ngOnInit(): void {
  }

}
