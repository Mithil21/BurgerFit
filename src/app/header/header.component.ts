import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location:Location) { }
public home = {} as HomeComponent;
  ngOnInit(): void {
    
  }
  isLoggedIn() : boolean {
    const url = this.location.path();
    let ret = true;
  if(url === '/register' || url === '/login'){
    ret = this.home.isLoggedIn = false;
  }
  return ret;
  }

}
