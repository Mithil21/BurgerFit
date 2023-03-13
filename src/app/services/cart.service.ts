import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { Foods } from 'src/app/shared/models/food';
import { CartItem } from '../shared/models/cartItem';
import { CartPayload } from '../cart-page/cart-payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartIntr } from '../cart-page/temp-cart-intr';
import { Keto } from '../shared/models/keto';
import { KetoPage } from '../shared/models/ketopage';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient: HttpClient) { }
  private url= "http://localhost:8080/";
private cart: cart = new cart();
addToCart(food :Foods):void{
  let cartItem = this.cart.items.find(item => item.food.id === food.id)
  if(cartItem){
    this.changeQuantity(food.id, cartItem.quantity+1)
    return;
  }
  else{
    this.cart.items.push(new CartItem(food))
  }
}
// addToCart1(ketopage :KetoPage):void{
//   let cartItem = this.cart.items.find(item => item.ketopage.id === ketopage.id)
//   if(cartItem){
//     this.changeQuantity(ketopage.id, cartItem.quantity+1)
//     return;
//   }
//   else{
//     this.cart.items.push(new CartItem(new Foods, ketopage))
//   }
// }
displayNutrition(keto:Keto):Keto{
  let size = Object.keys(keto).length;
  if(size>0){
return keto;
  }
  return keto;
}
removeFromCart(foodId: number):void{
  this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
}
changeQuantity( foodId: number,quantity:number ){
  let cartItem = this.cart.items.find(item => item.food.id === foodId);
if(!cartItem) return;
cartItem.quantity = quantity;
}
getCart(): cart{
  return this.cart;
}
public confirmOrder(cart:cartIntr): Observable<any>{
  // cart: CartPayload
return this.httpClient.post<any>(`${this.url}api/cart/store`,cart);
}

public getId(userName:string): Observable<any>{
  // cart: CartPayload
return this.httpClient.post<any>(`${this.url}api/cart/userId`,userName);
}
public userId!:number;
}
