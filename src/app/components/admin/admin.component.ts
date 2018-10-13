import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public bikes;

  constructor(private _bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this._bikeService.getBikes().subscribe(
      data => { this.bikes = data; },
      err => console.log(err),
      () => console.log('bikes loaded')
    );
  }

}
