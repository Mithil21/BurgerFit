import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { RegisterPayload } from '../register-payload';
import {of} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //registerForm:FormGroup;
  public registerForm ={}as  FormGroup;
  registerPayload: RegisterPayload;
  constructor(private formBuilder:FormBuilder, private authService: AuthService,private router: Router) {
 this.registerForm=   this.formBuilder.group({
      username :'',
      email:'',
      password:'',
      confirmpassword:''
    });
   
this.registerPayload ={
  username: ' ',
 email:'',
  password:'',
  confirmPassword:''
};
}
  ngOnInit(): void {
  };

onSubmit(){
 this.registerPayload.username = this.registerForm.get('username')?.value;
 this.registerPayload.email= this.registerForm.get('email')?.value;
 this.registerPayload.password =this.registerForm.get('password')?.value;
 this.registerPayload.confirmPassword=this.registerForm.get('confirmpassword')?.value;
  this.authService.register(this.registerPayload)
  .subscribe( data =>{
    console.log('register success');
    this.router.navigateByUrl('/register-success');
  }, error =>{
console.log("register failed");
  });
}
// success(){
  
//   this.router.navigateByUrl('/register-success');
// }
}
