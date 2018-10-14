import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  addedBike = false;

  constructor(private _bikeService: BikeService,
    private _fb: FormBuilder,
    private _datePipe: DatePipe) {

    this.registerForm = _fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'phone': ['', Validators.required],
      'model': ['', Validators.required],
      'serialNumber': ['', Validators.required],
      'purchasePrice': ['', Validators.required],
      'purchaseDate': ['', Validators.required],
      'contact': [true]
    });

    console.log(this.registerForm);
  }

  ngOnInit() {
  }

  onSubmit() {
    const payload = this.registerForm.value;
    if (this.registerForm.valid) {

      payload.purchaseDate = this._datePipe
        .transform(new Date(payload.purchaseDate), 'dd-MM-yyyy');

      this._bikeService.addBike(this.registerForm.value).subscribe(
        data => { this.registerForm.reset(); return true; },
        error => throwError(error),
        () => { this.addedBike = true; }
      );
    }
    console.log(this.registerForm.value);
  }




}
