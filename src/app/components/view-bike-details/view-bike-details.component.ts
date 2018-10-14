import { DatePipe } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-bike-details',
  templateUrl: './view-bike-details.component.html',
  styleUrls: ['./view-bike-details.component.css']
})
export class ViewBikeDetailsComponent implements OnInit {
  bike;
  registerForm: FormGroup;

  constructor(private _bikeService: BikeService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _datePipe: DatePipe) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'phone': ['', Validators.required],
      'model': ['', Validators.required],
      'serialNumber': ['', Validators.required],
      'purchasePrice': ['', Validators.required],
      'purchaseDate': ['', Validators.required],
      'contact': [true]
    });
    const id = this._route.snapshot.params.id;
    this.getBike(id);
  }

  getBike(id: number) {
    this._bikeService.getBikeById(id).subscribe(
      data => {
        this.bike = data;
        this.injectDataIntoForm(data);
      },
      error => { alert('Couldnt get bike'); }
    );
    console.log(this.bike);
  }

  injectDataIntoForm(data) {
    this.registerForm.setValue({
      'name': data.name,
      'email': data.email,
      'phone': data.phone,
      'model': data.model,
      'serialNumber': data.serialNumber,
      'purchasePrice': data.purchasePrice,
      'purchaseDate': data.purchaseDate,
      'contact': data.contact
    });
  }

  onSubmit() {
    const payload = this.registerForm.value;
    payload.id = this.bike.id;

    if (this.registerForm.valid) {
      payload.purchaseDate = this._datePipe
        .transform(new Date(payload.purchaseDate), 'dd-MM-yyyy');

      this._bikeService.editBike(payload, this.bike.id)
        .subscribe(
          data => {
            this.bike = data;
            this.injectDataIntoForm(data);
          },
          error => throwError(error),
      );
    }
    console.log(this.bike);
  }

}
