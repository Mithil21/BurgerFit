import { KetoComponent } from "src/app/keto/keto.component";
import { Foods } from "./food";
import { KetoPage } from "./ketopage";
import { VegPage } from "./vegpage";

export class CartItem{
    constructor(food: Foods){
this.food = food;
this.price;
// this.ketopage = ketopage;
    }
   food: Foods;
//   ketopage: KetoPage;
  
    quantity:number= 1;
get price(): number{
    return this.food.price* this.quantity;
}

}