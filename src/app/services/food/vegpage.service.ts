import { Injectable } from '@angular/core';
import { VegPage } from 'src/app/shared/models/vegpage';

@Injectable({
  providedIn: 'root'
})
export class VegpageService {

  constructor() { }
  //food by id
getVegById(id: number): VegPage{
  return this.getAll().find(veg => veg.id == id)!;


}
//foodimage
getAll():VegPage[]{
  return[{
id: 1,
name: 'CLASSIC VEG',
price: 99,
imageUrl: '/assets/classic veg details.jpg',
  },
 
  {
        id: 2,
        name: 'CLASSIC VEG WITH CHEESE',
        price: 119,
        imageUrl: '/assets/classic veg cheese details.jpg',
          },
          {
            id: 3,
            name: 'CRISPY VEG WITH CHEESE BURGER',
            price: 90,
            imageUrl: '/assets/crispy veg cheeese details.jpg',
              },
              {
                id: 4,
                name: 'LITE JUMBO JR VEG WITH CHEESE',
                price: 139,
                imageUrl: '/assets/lite jumbo jr cheese details.jpg',
                  },   
 {
   id: 5,
  name: 'MASALA JUMBO VEG',
  price: 199,
   imageUrl: '/assets/masala jumbo veg details.jpg',
   },                 
   {
    id: 6,
   name: 'CLASSIC VEG DOUBLE PATTY',
   price: 119,
    imageUrl: '/assets/vegdoublepattydetails.jpg',
    },       
    {
      id: 7,
     name: 'LITE JUMBO JR',
     price: 119,
      imageUrl: '/assets/jumbo jr veg details.jpg',
      },               
      {
        id: 8,
       name: 'CRISPY VEG DOUBLE PATTY',
       price: 90,
        imageUrl: '/assets/crsipyvegdouble details.jpg',
        }, 

];
}
}
