import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {SendService} from '../send.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})

// Gets strings and finds out which ID needs to be edited.

export class CountryEditComponent implements OnInit {
  send : any = [];
  myCountry : String; 
  myCapital : String; 
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  constructor(private router:Router, private route: ActivatedRoute, private service:SendService) { }


  // Finds ID
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getSend(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.send = data;
      console.log(this.send);
      this.myCountry = this.send.country;
      console.log("message" +this.myCountry);

    });
  }

  onEditSend(form: NgForm) {
    this.service.updateSend(this.send._id, form.value.country, form.value.capital, form.value.population).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
