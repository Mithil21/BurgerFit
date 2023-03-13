import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NonvegService } from '../services/food/nonveg.service';
import { NonVeg } from '../shared/models/nonveg';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {
  nonvegs: NonVeg[] =[];
  constructor(private nvs:NonvegService, private router: ActivatedRoute) { }
  public home ={} as HomeComponent;
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.nonvegs = this.nvs.getAll().filter(nonveg=> nonveg.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.nonvegs);}
   else{
    console.log("inside else");
    this.nonvegs = this.nvs.getAll();
    console.log(this.nonvegs);
  }
    })
  }}