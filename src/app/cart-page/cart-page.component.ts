import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { KetoComponent } from '../keto/keto.component';
import { KetopageComponent } from '../ketopage/ketopage.component';
import { CartService } from '../services/cart.service';
import { KetopageService } from '../services/food/ketopage.service';
import { cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { Keto } from '../shared/models/keto';
import { CartPayload } from './cart-payload';
import { cartIntr } from './temp-cart-intr';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart = {} as cart;
ketocompt = {} as KetopageComponent;
cartpayload ={} as CartPayload;
public today = new Date();
cartIntr = {} as cartIntr;
public keto = {} as Keto;
// public ketoAdd = {} as  Keto
public login = {} as LoginComponent;
public userId!: number;
public dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = this.today.getFullYear();
today1 = this.mm + '/' +this. dd + '/' + this.yyyy;
  constructor( private cartService : CartService, private router:Router, private location:Location, 
    private ar:ActivatedRoute, private ketoser:KetopageService, @Inject(Keto) private ketoAdd : Keto, private cgf: ChangeDetectorRef){
    this.setCart();
  }
  
  ngOnInit(): void {
    
  }
  public cal : number = 0;
  public prot : number  = 0;
  public carbs : number = 0;
  public fat : number = 0;
setCart(){
  this.cart = this.cartService.getCart();
  this.cartpayload.items = this.cart.items;
  this.cartpayload.total = this.cart.totalPrice;
this.cartpayload.orderDate = this.today1;

// cartIntr
this.cartIntr.items = this.cart.items;
this.cartIntr.total = this.cart.totalPrice;
this.cartIntr.orderDate = this.today1;
this.cartIntr.userId = this.cartService.userId;

}

removeFromCart(cartItem : CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  //this.setCart();
  let id = this.cart.items.filter(num=>num.food.id>20);
  console.log(cartItem.food.id);
console.log(id[0]);
this.ar.params.subscribe((params)=>{
  if(cartItem.food.id){
    console.log("const");
    this.keto = this.ketoser.getKetoById(cartItem.food.id);
  }
})

this.cal-=this.keto.calories;
this.carbs-=this.keto.carbs;
this.prot-=this.keto.protein;
this.fat-=this.keto.fat;
// this.keto= new Keto;
}
changeQuantity(cartItem: CartItem , quantityInString : string){
const quantity = parseInt(quantityInString);
this.cartService.changeQuantity(cartItem.food.id,quantity);
this.setCart();
}
confirmOrder(){
  // this.cartIntr.userId= this.userId;
  // console.log("cart user id");
  // console.log(this.userId1);
  // this.getUserId();
  this.cartService.confirmOrder(this.cartIntr).subscribe(
    (response:CartPayload)=>{
      console.log(response);
      alert(response);
this.router.navigateByUrl("/home");
    },(error:HttpErrorResponse)=>{
      alert(error);
    }
  )
}

// getUserId(){
//   console.log(this.login.userName);
//   this.cartService.getId(this.login.userName).subscribe(
//     (response:number)=>{
//       console.log(response);
//       alert(response);
// this.router.navigateByUrl("/home");
//     },(error:HttpErrorResponse)=>{
//       alert(error);
//     }
//   )
// }

displayNutrition(): boolean{
  let id = this.cart.items.filter(num=>num.food.id>20);
console.log(id);
for(let i = 0;i<id.length;i++){
  // ha ruko
  // this.keto = this.ketocompt.getId(id[i].food.id);
  this.ar.params.subscribe((params)=>{
    if(id){
      console.log("const");
      this.ketoAdd = this.ketoser.getKetoById(id[i].food.id);
    }
  })
  this.cal+=this.ketoAdd.calories;
  this.carbs = this.carbs+this.ketoAdd.carbs;
  this.prot+=this.ketoAdd.protein;
  this.fat+=this.ketoAdd.fat;
  // this.keto = new Keto;
  // this.cal+=this.keto.calories;
  // this.carbs+=this.keto.carbs;
  // this.prot+=this.keto.protein;
  // this.fat+=this.keto.fat;
}
// console.log(this.keto.calories);
if(this.ketoAdd){
  return true;
}
  // Idhar dekho unmute kro
  return false;
}
}
