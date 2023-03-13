import { Injectable } from '@angular/core';
import { NonVeg } from 'src/app/shared/models/nonveg';

@Injectable({
  providedIn: 'root'
})
export class NonvegService {

  constructor(){}
//food by id
getNonVegById(id: number): NonVeg{
  return this.getAll().find(nonveg => nonveg.id == id)!;


}
//foodimage
getAll():NonVeg[]{
  return[{
id: 9,
name: 'CLASSIC CHICKEN',
price: 119,
imageUrl: '/assets/classic chicken.jpg',
  },
 
  {
        id: 10,
        name: 'CLASSIC CHICKEN DOUBLE PATTY ',
        price: 159,
        imageUrl: '/assets/classicchickendouble.jpg',
          },
          {
            id: 11,
            name: 'CRISPY CHICKEN',
            price: 90,
            imageUrl: '/assets/crispychicken.jpg',
              },
              {
                id: 12,
                name: 'LITE JUMBO JR CHICKEN WITH CHEESE',
                price: 159,
                imageUrl: '/assets/jumbojrchickencheese.jpg',
                  },   
 {
   id: 13,
  name: 'MASALA JUMBO CHICKEN',
  price: 199,
   imageUrl: '/assets/masala jumbo chicken.jpg',
   },                 
   {
    id: 14,
   name: 'CRISPY CHICKEN DOUBLE PATTY',
   price: 119,
    imageUrl: '/assets/crispychickendoublepatty.jpg',
    },       
    {
      id: 15,
     name: 'LITE JUMBO JR  CHICKEN DOUBLE PATTY',
     price: 189,
      imageUrl: '/assets/lite jumbojrchickendouble.jpg',
      },               
      {
        id: 16,
       name: 'LITE JUMBO JR CHICKEN',
       price: 139,
        imageUrl: '/assets/lite jumbo jr chick.jpg',
        }, 
        {
          id: 17,
         name: 'CLASSIC CHICKEN WITH CHEESE',
         price: 139,
          imageUrl: '/assets/classicchickencheese.jpg',
          }, 
          {
            id: 18,
           name: 'CRISPY CHICKEN BURGER',
           price: 90,
            imageUrl: '/assets/chrispychickenburger.jpg',
            }, 
            {
              id: 19,
             name: 'BIG SMOKEY GRILL CHICKEN',
             price: 159,
              imageUrl: '/assets/bigsmokeygrill.jpg',
              },
              {
                id: 20,
               name: 'SPICY GRILL CHICKEN BURGER',
               price: 119,
                imageUrl: '/assets/spicygrillchicken.jpg',
                },  


];
}
}

