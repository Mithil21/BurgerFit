import { Injectable } from '@angular/core';
import { Keto } from 'src/app/shared/models/keto';

@Injectable({
  providedIn: 'root'
})
export class KetoService {

  constructor() { }
  getKetoById(id: number): Keto{
    return this.getAll().find(nonveg => nonveg.id == id)!;
  
  
  }
  //foodimage
  getAll():Keto[]{
    return[{
  id: 21,
  name: 'IN-N-OUT-STYLE KETO BURGER',
  price: 270,
  carbs:5,
  protein:28,
  fat:32,
  calories:500,
  details:'Caramelized onions, fresh beef patties, creamy fry sauce, and melty cheese…yum! Pickles, tomatoes, and a lettuce wrap balance everything with a little freshness',
  imageUrl: '/assets/keto/Keto-Burger.jpg',
    },
   
    {
          id: 22,
          name: 'KETO BUTTER BURGER ',
          price: 290,
          carbs:8,
          protein:32,
          fat:35,
          calories:525,
          details:'Grilled tomatoes,fresh beef patties with jalapeno,onion and lettuce.Fresh avacados perfectly oozed in butter!',
          imageUrl: '/assets/keto/keto butter burger.jpg',
            },
            {
              id: 23,
              name: 'KETO PAN BURGERS WITH BACON AND JALAPENO',
              price: 300,
              carbs:8,
              protein: 42,
              fat: 39,
              calories:566,
              details:'all-beef burger topped with crispy jalapeños, softened onions, salty bacon, melty cheese, and spicy sauce. Wow!',
              imageUrl: '/assets/keto/keto sheet pan burger.jpg',
                },
                {
                  id: 24,
                  name: 'KETO TURKEY BURGER',
                  price: 210,
                  carbs:11,
                  protein:35,
                  fat:37,
                  calories:683,
                  details:'Southwestern flavors,  smoky, spicy, and savory.Topped with an exciting chipotle mayo, tasty salsa, and fresh avocado ',
                  imageUrl: '/assets/keto/keto turkey burger.jpg',
                    },   
   {
     id: 25,
    name: 'JUICY KETO MUSHROOM ONION BACON BURGER',
    price: 250,
    carbs:13,
    protein:30,
    fat:32,
    calories:553,
    details:'caramelized onions, sauteed mushrooms, and juicy bacon on a succulent beef patty. Top it off with a creamy and salty onion-mayonnaise sauce',
     imageUrl: '/assets/keto/ketomushroomonion.jpg',
     },                 
     {
      id: 26,
     name: 'GRASS-FED GREEK BURGER WITH TZATZIKI SAUCE',
     price: 275,
     carbs:15,
     protein:36,
     fat:32,
     calories:513,
     details:' the natural flavor of the beef is enhanced with typical Greek spices.top it with fresh tomatoes, onion, and a delectable, dairy-free tzatziki sauce.',
      imageUrl: '/assets/keto/keto greek burger tzatzikisauce.jpg',
      },       
      {
        id: 27,
       name: 'GREEK GYRO BURGER',
       price: 210, 
       carbs:8,
       protein:30,
       fat:27,
       calories:496,
       details: 'burger patty is made with Greek spices, crumbled feta, and sauteed onions and peppers – so yummy!Top it with tomatoes, cucumbers, kalamata olives, red onion, more feta, and tzatziki.',
        imageUrl: '/assets/keto/keto gyro burger.jpg',
        },               
        {
          id: 28,
         name: 'JUICY KETO BUNLESS BURGER',
         price: 200,
         carbs:11,
         protein:22,
         fat:30,
         calories:450,
         details:'lettuce,tomato,onion and cheese wrapped between chicken patties',
          imageUrl: '/assets/keto/keto bunless burger.jpg',
          }, 
          {
            id: 29,
           name: 'FAT BURGER',
           price: 200,
           carbs:5,
           protein:36,
           fat:40,
           calories:590,
           details:' bacon, ground pork, and ground beef all in one patty.Mixed with herbs, seasonings, and oniony goodness. ',
            imageUrl: '/assets/keto/keto fat burger.jpg',
            }, 
            {
              id: 30,
             name: 'GRILLED KETO CHEESEBURGERS ON PORTOBELLO ',
             price: 210,
             carbs:5,
             protein:28,
             fat:32,
             calories:610,
             details:' earthy, delicious portobello buns with  deeply-savory beef burger topped with bacon and avocado.',
            imageUrl: '/assets/keto/grilled keto cheese.jpg',
              }, 
              {
                id: 31,
               name: 'KETO BACON-WRAPPED AVACADO BURGER BOMBS',
               price: 249,
               carbs:10,
               protein:35,
               fat:35,
               calories:513,
               details:' cheese-stuffed avocado wrapped in a spicy jalapeño-beef burger patty,wrapped with grilled bacon',
                imageUrl: '/assets/keto/keto bacon wrapped avacado burger.jpg',
                },
                {
                  id: 32,
                 name: 'KETO LETTUCE WRAPPED PORK BURGER',
                 price: 280,
                 carbs:15,
                 protein:39,
                 fat:44,
                 calories:623,
                 details:'mouthwatering pork and jalapeño patty with mustard-mayo,cheese and tomatoes',
                  imageUrl: '/assets/keto/keto ork burger lettuce wrapped.jpg',
                  },  
  
                  {
                    id: 33,
                   name: 'KETO PEANUT BUTTER BACON BURGER',
                   price: 290,
                   carbs:19,
                   protein:35,
                   fat:42,
                   calories:513,
                   details:'beef with luscious peanut butter sauce with bacon bits top with grillled onions,bacon,and fresh jalapenos',
                    imageUrl: '/assets/keto/keto peanut butter burger.jpg',
                    },  
                    {
                      id: 34,
                     name: 'GREEK LAMB BURGER WITH EGGPLANTS SLICE',
                     price: 290,
                     carbs:12,
                     protein:28,
                     fat:32,
                     calories:500,
    details:'Greek lamb burger, grilled eggplant with feta cheese,tomato,cucumber and herbal seasonings',
                      imageUrl: '/assets/keto/greek lamb burger.jpg',
                      },  
    
    
  ];
  }
  }
  
  

