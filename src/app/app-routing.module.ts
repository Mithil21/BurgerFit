import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { KetopageComponent } from './ketopage/ketopage.component';
import { NonvegpageComponent } from './nonvegpage/nonvegpage.component';
import { VegBurgerComponent } from './veg-burger/veg-burger.component';
import { VeganPageComponent } from './vegan-page/vegan-page.component';
import { VegcomponentComponent } from './vegcomponent/vegcomponent.component';

const routes: Routes = [
 { path:'', redirectTo:'register', pathMatch:'full'},
 {path:'search/:searchItem', component:HomeComponent},
 {path:'food/:id', component:FoodpageComponent},
 {path:'cart-page',component:CartPageComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'register-success',component:RegisterSuccessComponent},
 {path:'home',component:HomeComponent},
 {path:'veg',component:VegBurgerComponent},
 {path:'veg/:id',component:VegcomponentComponent},
 {path:'nonveg/:id',component:NonvegpageComponent},
 {path:'keto/:id',component:KetopageComponent},
 {path:'vegan/:id',component:VeganPageComponent}
 
//  {path:'search/:searchItem', component:VegBurgerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
