import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Veg } from '../shared/models/veg';
import { VegService } from '../services/food/veg.service';
import { NonvegService } from '../services/food/nonveg.service';
import { NonVeg } from '../shared/models/nonveg';
import { KetoService } from '../services/food/keto.service';
import { Keto } from '../shared/models/keto';
import { Vegan } from '../shared/models/vegan';
import { VeganService } from '../services/food/vegan.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foods:Foods[] =[];
vegs:Veg[] = [];
nonvegs: NonVeg[] =[];
ketos: Keto[] =[];
vegans: Vegan[] =[];
  constructor(private fs:FoodService, private router: ActivatedRoute, private vs:VegService, private nvs: NonvegService , private ks:KetoService, private vgs: VeganService) { }
public isLoggedIn:boolean = true;
public stage:number = 1;
  changeStage(stage:number):any{
    return this.stage = stage;
    
  }


  ngOnInit(): void {
    const st = this.stage;
    if(st === 0){
      this.router.params.subscribe(params =>{
        if(params['searchItem'])
        this.foods = this.fs.getAll().filter(food=> food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
     else
      this.foods = this.fs.getAll();
      })
    }
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
    //keto
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.ketos = this.ks.getAll().filter(keto=> keto.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.ketos);}
   else{
    console.log("inside else");
    this.ketos = this.ks.getAll();
    console.log(this.ketos);
  }
    })
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.vegans = this.ks.getAll().filter(vegan=> vegan.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.vegans);}
   else{
    console.log("inside else");
    this.vegans = this.vgs.getAll();
    console.log(this.vegans);
  }
    })
// console.log(this.stage);
// console.log(st);
//     if(st === 1){
//       console.log("inside vs");
//       this.router.params.subscribe(params =>{
//         console.log(params);
//         if(params['searchItem']){
//         console.log("inside if");
//         this.vegs = this.vs.getAll().filter(veg=> veg.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
//         console.log(this.vegs);}
//       })
//     }
   
  }


}
