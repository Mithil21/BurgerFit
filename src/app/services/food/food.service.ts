import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  //food by id
  getFoodById(id: number): Foods{
    return this.getAll().find(food => food.id == id)!;


  }
  //foodimage
  getAll():Foods[]{
    return[{
id: 1,
name: 'Cheese',
price: 30,


imageUrl: '/assets/cheese.jpg',
    },
  {
      id: 2,
      name: 'Lettuce',
      price: 20,
   
      
      imageUrl: '/assets/lettuce.jpg',
          },
 {
      id: 3,
     name: 'Mexicano Chilli',
     price: 50,
     imageUrl: '/assets/mexicano chili.jpg',
        },
 {
   id: 4,
    name: 'Onion',
     price: 20,
   
 imageUrl: '/assets/onion.jpg',
    },
 {
      id: 5,
     name: 'Patty',
     price: 60,
     imageUrl: '/assets/patty.jpg',
    },
    {
      id: 6,
      name: 'Tomato',
      price: 20,  
      imageUrl: '/assets/tomato.jpg',
          },

      
    ];
  }
}
