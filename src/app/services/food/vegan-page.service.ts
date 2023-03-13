import { Injectable } from '@angular/core';
import { Vegan } from 'src/app/shared/models/vegan';

@Injectable({
  providedIn: 'root'
})
export class VeganPageService {
  
    constructor() { }
    getVeganById(id: number): Vegan{
      return this.getAll().find(nonveg => nonveg.id == id)!;
    
    
    }
    //foodimage
    getAll():Vegan[]{
      return[{
        id: 35,
        name: ' SMOKY TEMPEH BURGER ',
        price: 290,
        carbs:5,
        protein:30,
        fat:32,
        calories:500,
        details:'Caramelized onions with fresh avacados and juicy patty with black beans,mushrooms and tempeh with miso paste and spices pacaked with vegan protein',
        imageUrl: '/assets/vegan/Smoky-tempeh-burgers-with-black-beans-and-mushrooms.jpg',
          },
         
          {
                id: 36,
                name: 'PULLED BBQ JACKFRUIT BURGER',
                price: 250,
                carbs:8,
                protein:32,
                fat:35,
                calories:525,
                details:'A burger loaded with jackfruit and a generous spoonful of vegan coleslaw to balance the sweet flavours of the BBQ sauce with crisp textures and a creamy element',
                imageUrl: '/assets/vegan/Vegan-BBQ-Jackfruit-Burger-3.jpg',
                  },
                  {
                    id: 37,
                    name: 'VEGAN SWEET POTATO BURGER',
                    price: 300,
                    carbs:8,
                    protein: 42,
                    fat: 39,
                    calories:566,
                    details:' Flavourful vegan sweet potato burger . Topped with avocado, vegan mayo, red onion, and spicy Kimchi, they are the perfect combination of savoury and spicy. ',
                    imageUrl: '/assets/vegan/Vegan-Sweet-Potato-Burgers.jpg',
                      },
                      {
                        id: 38,
                        name: 'CHEESE STUFFED BIG DADDY BUREGR',
                        price: 270,
                        carbs:11,
                        protein:35,
                        fat:37,
                        calories:683,
                        details:'Toasted hamburger buns with seitan patty filled in center with vegan cheese ,BBQ sauce and Worcestershire sauce, lemon juice, brown rice syrup,  ',
                        imageUrl: '/assets/vegan/Cheese-Stuffed-Big-Dadd-Burger.jpg',
                          },   
         {
           id: 39,
          name: 'VEGAN BIG MAC BURGER',
          price: 250,
          carbs:13,
          protein:30,
          fat:32,
          calories:553,
          details:'“a creamy, delicious balance of sour, zesty mustard flavor, pickle relish, onion powder, and savory tastes. Chopped white onion, slices of dill  pickles, lettuce and vegan American cheese”',
           imageUrl: '/assets/vegan/vegan-big-mac-burger.jpg',
           },                 
           {
            id: 40,
           name: 'MEXICAN GREEN CHILLI VEGGIE BURGER',
           price: 275,
           carbs:15,
           protein:36,
           fat:32,
           calories:513,
           details:' Given with an Mexican twist with chickpeas, green chilies, and crushed tortilla chips!  cilantro, red onion, salsa, extra green chilies and a whole wheat bun. But to keep these gluten free you could also wrap them in lettuce or enjoy atop a Mexican salad!',
            imageUrl: '/assets/vegan/mexican-minimalistbaker.jpg',
            },       
            {
              id: 41,
             name: 'CHANA MASALA VEGGIE BURGER ',
             price: 210, 
             carbs:8,
             protein:30,
             fat:27,
             calories:496,
             details: 'This chana masala burger is delicious with the vibrant flavors of an Indian chana masala. The patty is sandwiched in a whole wheat bun with greens, tomatoes and onions. A green chutney mayo adds more flavor!',
              imageUrl: '/assets/vegan/chana-masala-burger.jpg',
              },               
              {
                id: 42,
               name: 'THE BIG BHAJI BURGER',
               price: 200,
               carbs:11,
               protein:22,
               fat:30,
               calories:450,
               details:' Instead of a plant-based patty, a crispy onion bhaji burger topped with mango chutney into a fluffy white roll and topped with lettuce and crispy veggies',
                imageUrl: '/assets/vegan/bosh-bhaji-burger.jpg',
                }, 
                {
                  id: 43,
                 name: 'MUSHROOM-BEAN BURGER',
                 price: 200,
                 carbs:5,
                 protein:36,
                 fat:40,
                 calories:590,
                 details:' Combine the meaty texture of mushrooms with fiber-filled pinto beans and seasonings, and you are in for a treat topped with baby spinach,sliced tomatoes,sliced cucumbers',
                imageUrl: '/assets/vegan/mushroom-bean.png',
                  }, 
                  {
                    id: 44,
                   name: 'SEITAN MEGAN BURGER ',
                   price: 210,
                   carbs:5,
                   protein:28,
                   fat:32,
                   calories:610,
                   details:' earthy, delicious portobello buns with  combined ground seitan, mashed black-eyed peas,wheat gluten flavoured with garlic , salty umami,cayenne and dried fengruik leaves.',
                  imageUrl: '/assets/vegan/Vegan-megaburger.jpg',
                    }, 
                    {
                      id: 45,
                     name: 'HIGH-PROTEIN VEGAN BURGERS',
                     price: 249,
                     carbs:10,
                     protein:38,
                     fat:35,
                     calories:513,
                     details:' Patties that are made with textured vegetable protein such as soya chunks and coated with vital wheat gluten and cooked beans with tomato paste,soy sauce and galzed with maple syrup.',
                      imageUrl: '/assets/vegan/high-protein.jpg',
                      },
                      {
                        id: 46,
                       name: 'GREEN GODDESS PESTO BURGERS',
                       price: 280,
                       carbs:15,
                       protein:39,
                       fat:44,
                       calories:623,
                       details:'Pesto fans rejoice! These baked burgers are filled with green goodness, from leaves to legumes and chickpeas, spinach, basil and garlic and squashing them into flavoursome patties. They’re filled with iron and just bursting with basil and garlic.',
                        imageUrl: '/assets/vegan/green-goddess.jpg',
                        },  
        
                        {
                          id: 47,
                         name: 'BLACK LENTIL MUSHROOM BURGER',
                         price: 290,
                         carbs:19,
                         protein:35,
                         fat:42,
                         calories:513,
                         details:' Patty that is filled with Black Lentil and roasted Pistachio tooped with Shiitake Mushroom and crispy fries with a bread base of vital wheat gluten',
                          imageUrl: '/assets/vegan/blacklentil-vegan.jpg',
                          },  
                          
          
          
        ];
        }
    
}
