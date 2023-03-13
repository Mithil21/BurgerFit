import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { NonvegpageService } from '../services/food/nonvegpage.service';
import { NonVegPage } from '../shared/models/nonvegpage';

@Component({
  selector: 'app-nonvegpage',
  templateUrl: './nonvegpage.component.html',
  styleUrls: ['./nonvegpage.component.css']
})
export class NonvegpageComponent implements OnInit {
  nonvegpage !: NonVegPage;
  constructor(private activatedRoute : ActivatedRoute , private nonvegpageService: NonvegpageService, private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.nonvegpage = nonvegpageService.getNonVegById(params['id'])
      })
     }

  ngOnInit(): void {
  }
addToCart(){
this.cartService.addToCart(this.nonvegpage);
this.router.navigateByUrl('/cart-page');
}
}