import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { playstations } from '../playstations';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  // playstations = playstations;
  playstation;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }
    addToCart(playstation) {
      this.cartService.addToCart(playstation);
      window.alert('Your product has been added to the cart!');
    }
    
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const playstationIdFromRoute = Number(routeParams.get('playstationId'));

  // Find the product that correspond with the id provided in route.
  this.playstation = playstations.find(playstation => playstation.id === playstationIdFromRoute);
  }

}
