import { Injectable } from '@angular/core';
import { NonVeg } from 'src/app/shared/models/nonveg';

@Injectable({
  providedIn: 'root'
})
export class NonvegpageService {
  getNonVegById(id: number): NonVeg{
    return this.getAll().find(nonveg => nonveg.id == id)!;
  
  
  }
  //foodimage
  getAll():NonVeg[]{
    return[{
  id: 9,
  name: 'CLASSIC CHICKEN',
  price: 119,
  imageUrl: '/assets/classic chicken details.jpg',
    },
   
    {
          id: 10,
          name: 'CLASSIC CHICKEN DOUBLE PATTY ',
          price: 159,
          imageUrl: '/assets/classicchickendouble details.jpg',
            },
            {
              id: 11,
              name: 'CRISPY CHICKEN',
              price: 90,
              imageUrl: '/assets/crispychicken details.jpg',
                },
                {
                  id: 12,
                  name: 'LITE JUMBO JR CHICKEN WITH CHEESE',
                  price: 159,
                  imageUrl: '/assets/jumbojrchickencheese details.jpg',
                    },   
   {
     id: 13,
    name: 'MASALA JUMBO CHICKEN',
    price: 199,
     imageUrl: '/assets/masala jumbo chicken details.jpg',
     },                 
     {
      id: 14,
     name: 'CRISPY CHICKEN DOUBLE PATTY',
     price: 119,
      imageUrl: '/assets/crispychickendoublepatty details.jpg',
      },       
      {
        id: 15,
       name: 'LITE JUMBO JR  CHICKEN DOUBLE PATTY',
       price: 189,
        imageUrl: '/assets/lite jumbojrchickendouble details.jpg',
        },               
        {
          id: 16,
         name: 'LITE JUMBO JR CHICKEN',
         price: 139,
          imageUrl: '/assets/lite jumbo jr chick details.jpg',
          }, 
          {
            id: 17,
           name: 'CLASSIC CHICKEN WITH CHEESE',
           price: 139,
            imageUrl: '/assets/classicchickencheese details.jpg',
            }, 
            {
              id: 18,
             name: 'CRISPY CHICKEN BURGER',
             price: 90,
              imageUrl: '/assets/chrispychickenburger details.jpg',
              }, 
              {
                id: 19,
               name: 'BIG SMOKEY GRILL CHICKEN',
               price: 159,
                imageUrl: '/assets/bigsmokeygrill details.jpg',
                },
                {
                  id: 20,
                 name: 'SPICY GRILL CHICKEN BURGER',
                 price: 119,
                  imageUrl: '/assets/spicygrillchicken details.jpg',
                  },  
  
  
  ];
  }
  }
  
  
