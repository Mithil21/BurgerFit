import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { KetoService } from '../services/food/keto.service';
import { Keto } from '../shared/models/keto';

@Component({
  selector: 'app-keto',
  templateUrl: './keto.component.html',
  styleUrls: ['./keto.component.css']
})
export class KetoComponent implements OnInit {
  ketos: Keto[] =[];
  constructor(private ks:KetoService, private router: ActivatedRoute) { }
  public home ={} as HomeComponent;
  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      console.log(params);
      if(params['searchItem']){
      console.log("inside if");
      this.ketos = this.ks.getAll().filter(keto=> keto.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      console.log(this.ketos);}
   else{
    console.log("inside else");
    this.ketos = this.ks.getAll();
    console.log(this.ketos);
  }
    })
  }}