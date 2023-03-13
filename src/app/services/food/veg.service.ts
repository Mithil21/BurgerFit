import { Injectable } from '@angular/core';
import { Veg } from 'src/app/shared/models/veg';

@Injectable({
  providedIn: 'root'
})
export class VegService {

  constructor() {}


//food by id
getVegById(id: number): Veg{
  return this.getAll().find(veg => veg.id == id)!;


}
//foodimage
getAll():Veg[]{
  return[{
id: 1,
name: 'CLASSIC VEG',
price: 99,
imageUrl: '/assets/classic veg.jpg',
  },
 
  {
        id: 2,
        name: 'CLASSIC VEG WITH CHEESE',
        price: 119,
        imageUrl: '/assets/classic veg with cheese.jpg',
          },
          {
            id: 3,
            name: 'CRISPY VEG WITH CHEESE BURGER',
            price: 90,
            imageUrl: '/assets/crispy veg cheese.jpg',
              },
              {
                id: 4,
                name: 'LITE JUMBO JR VEG WITH CHEESE',
                price: 139,
                imageUrl: '/assets/lite jumbo jr vegcheese.jpg',
                  },   
 {
   id: 5,
  name: 'MASALA JUMBO VEG',
  price: 199,
   imageUrl: '/assets/masala jumbo veg.jpg',
   },                 
   {
    id: 6,
   name: 'CLASSIC VEG DOUBLE PATTY',
   price: 119,
    imageUrl: '/assets/vegdoublepatty.jpg',
    },       
    {
      id: 7,
     name: 'LITE JUMBO JR',
     price: 119,
      imageUrl: '/assets/jumbo jr veg.jpg',
      },               
      {
        id: 8,
       name: 'CRISPY VEG DOUBLE PATTY',
       price: 90,
        imageUrl: '/assets/crispyvegdoublepatty.jpg',
        }, 

];
}
}
