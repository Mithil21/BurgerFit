import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { HttpClientModule } from '@angular/common/http';
import { VegBurgerComponent } from './veg-burger/veg-burger.component';
import { VegcomponentComponent } from './vegcomponent/vegcomponent.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { NonvegpageComponent } from './nonvegpage/nonvegpage.component';
import { KetoComponent } from './keto/keto.component';
import { KetopageComponent } from './ketopage/ketopage.component';
import { Keto } from './shared/models/keto';
import { VeganComponent } from './vegan/vegan.component';
import { VeganPageComponent } from './vegan-page/vegan-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    SearchComponent,
    CartPageComponent,
    FoodpageComponent,
    VegBurgerComponent,
    VegcomponentComponent,
    NonvegComponent,
    NonvegpageComponent,
    KetoComponent,
    KetopageComponent,
    VeganComponent,
    VeganPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Keto],
  bootstrap: [AppComponent]
})
export class AppModule { }
