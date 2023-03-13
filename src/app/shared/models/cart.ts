import { CartItem } from "./cartItem";

export class cart{
    items : CartItem[]=[];
//total price of items bought
get totalPrice(): number{
    let totalPrice=0;
    this.items.forEach(item=>{
        totalPrice = totalPrice + item.price;
    });
    return totalPrice;
}

}

