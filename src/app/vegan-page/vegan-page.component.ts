import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { VeganPageService } from '../services/food/vegan-page.service';
import { Vegan } from '../shared/models/vegan';

import { VeganPage } from '../shared/models/veganPage';

@Component({
  selector: 'app-vegan-page',
  templateUrl: './vegan-page.component.html',
  styleUrls: ['./vegan-page.component.css']
})
export class VeganPageComponent implements OnInit {

  veganpage !: VeganPage;
  public vegan = {} as Vegan;
  constructor(private activatedRoute : ActivatedRoute , private veganpageService: VeganPageService, private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          console.log("const");
          this.veganpage = veganpageService.getVeganById(params['id']);
          this.vegan= this.veganpage;
        }
        

      })
     }
     id!:number;


  ngOnInit(): void {
    // this.keto = this.ketopage;
    // console.log(this.keto.calories);
  }

  // getNutrition():Vegan{
  //   // this.activatedRoute.params.subscribe((params)=>{
  //   //   if(this.id)
  //   //   this.keto = this.ketopageService.getKetoById(this.id)
  //   // })
  //   return this.vegan
  // }
  
// addToCart(){
//   // this.keto = this.ketopage;
// this.cartService.addToCart(this.veganpage);
// this.router.navigateByUrl('/cart-page');
// }
// public getId(id:number):Vegan{
//   this.activatedRoute.params.subscribe((params)=>{
//     if(id){
//       console.log("const");
//       this.veganpage = this.veganpageService.getVeganById(id);

//       this.vegan = this.veganpage;
//     }
//   })
//   return this.vegan;
// }
addToCart(){
  this.cartService.addToCart(this.veganpage);
  this.router.navigateByUrl('/cart-page');
  }
}
