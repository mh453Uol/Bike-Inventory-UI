import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private _bikeService: BikeService,
    private _fb: FormBuilder) {
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



}
