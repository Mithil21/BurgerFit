import { CartItem } from "../shared/models/cartItem";

export interface cartIntr{
 items:CartItem[];
 total:number;
 userId:number;
 orderDate:string;
}