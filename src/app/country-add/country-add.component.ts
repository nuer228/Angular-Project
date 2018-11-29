import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {SendService} from '../services/send.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import {Send} from '../send.model';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CountryAddComponent implements OnInit {
  opened = true;mponent
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ThirdFormGroup: FormGroup;

  constructor(private service:SendService) { }

  // Allows us to add fields to MangoDB
  onAddSend(form: NgForm) {

    this.service.addSend(form.value.country, form.value.capital, form.value.population).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

 
  ngOnInit() {

  }
}
