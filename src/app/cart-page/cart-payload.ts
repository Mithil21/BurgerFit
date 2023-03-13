import { CartItem } from "../shared/models/cartItem";

export class CartPayload{
    public items = {} as CartItem[] ;
    public total = {} as Number;
    public userId = {} as number;
    public orderDate ={} as String;

}