import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { VegService } from '../services/food/veg.service';
import { Veg } from '../shared/models/veg';

@Component({
  selector: 'app-veg-burger',
  templateUrl: './veg-burger.component.html',
  styleUrls: ['./veg-burger.component.css']
})
export class VegBurgerComponent implements OnInit {
  vegs: Veg[] =[];
  constructor(private vs:VegService, private router: ActivatedRoute) { }
  public home ={} as HomeComponent;
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.vegs = this.vs.getAll().filter(veg=> veg.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.vegs);}
   else{
    console.log("inside else");
    this.vegs = this.vs.getAll();
    console.log(this.vegs);
  }
    })

// this.router.params.subscribe(params =>{
//       console.log(params);
//       if(params['searchItem']){
//         this.vegs = this.home.vegs;
//       }
//    else{
//     console.log("inside else");
//     this.vegs = this.vs.getAll();
//     console.log(this.vegs);
//   }
//     })
  }

}
