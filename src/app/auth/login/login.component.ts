import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { CartPayload } from 'src/app/cart-page/cart-payload';
import { cartIntr } from 'src/app/cart-page/temp-cart-intr';
import { CartService } from 'src/app/services/cart.service';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm={} as FormGroup;
  loginPayload: LoginPayload;
  constructor(private authService:AuthService, private router:Router,private carSer:CartService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
     this.loginPayload ={
        username: ' ',
        password:'',
      };
  }
public userId!: number;
public userName!:string;
  ngOnInit(): void {
  }
  onSubmit(){
    this.loginPayload.username = this.loginForm.get('username')?.value;
    this.loginPayload.password = this.loginForm.get('password')?.value;
   let userN = this.loginForm.get('username')?.value;
  this.authService.login(this.loginPayload).subscribe(data=>{
    if(data){
      this.userId = data;
      console.log(data);
      this.carSer.userId = data;
     
      console.log('login success');
      this.router.navigateByUrl('/home');
    }
    else{
      console.log('login failed');
    }
  })
  this.userName = userN;
  }
}
