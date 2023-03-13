import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { VegService } from '../services/food/veg.service';
import { VegpageService } from '../services/food/vegpage.service';
import { Veg } from '../shared/models/veg';
import { VegPage } from '../shared/models/vegpage';

@Component({
  selector: 'app-vegcomponent',
  templateUrl: './vegcomponent.component.html',
  styleUrls: ['./vegcomponent.component.css']
})
export class VegcomponentComponent implements OnInit {
vegpage !: VegPage;
  constructor(private activatedRoute : ActivatedRoute , private vegpageService: VegpageService, private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.vegpage = vegpageService.getVegById(params['id'])
      })
     }

  ngOnInit(): void {
  }
addToCart(){
this.cartService.addToCart(this.vegpage);
this.router.navigateByUrl('/cart-page');
}
}