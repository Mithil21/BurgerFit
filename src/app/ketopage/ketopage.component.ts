import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { KetopageService } from '../services/food/ketopage.service';
import { Keto } from '../shared/models/keto';
import { KetoPage } from '../shared/models/ketopage';

@Component({
  selector: 'app-ketopage',
  templateUrl: './ketopage.component.html',
  styleUrls: ['./ketopage.component.css']
})
export class KetopageComponent implements OnInit {

  ketopage !: KetoPage;
  public keto = {} as Keto;
  constructor(private activatedRoute : ActivatedRoute , private ketopageService: KetopageService, private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          console.log("const");
          this.ketopage = ketopageService.getKetoById(params['id']);
          this.keto = this.ketopage;
        }
        

      })
     }
     id!:number;


  ngOnInit(): void {
    // this.keto = this.ketopage;
    // console.log(this.keto.calories);
  }

  getNutrition():Keto{
    // this.activatedRoute.params.subscribe((params)=>{
    //   if(this.id)
    //   this.keto = this.ketopageService.getKetoById(this.id)
    // })
    return this.keto
  }
  
addToCart(){
  // this.keto = this.ketopage;
this.cartService.addToCart(this.ketopage);
this.router.navigateByUrl('/cart-page');
}
public getId(id:number):Keto{
  this.activatedRoute.params.subscribe((params)=>{
    if(id){
      console.log("const");
      this.ketopage = this.ketopageService.getKetoById(id);
      this.keto = this.ketopage;
    }
  })
  return this.keto;
}
}
