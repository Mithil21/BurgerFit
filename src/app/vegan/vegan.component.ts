import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { VeganService } from '../services/food/vegan.service';
import { Vegan } from '../shared/models/vegan';

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.css']
})
export class VeganComponent implements OnInit {

  vegans: Vegan[] =[];
  constructor(private vs:VeganService, private router: ActivatedRoute) { }
  public home ={} as HomeComponent;
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.vegans = this.vs.getAll().filter(vegan=> vegan.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.vegans);}
   else{
    console.log("inside else");
    this.vegans = this.vs.getAll();
    console.log(this.vegans);
  }
    })
  }}
