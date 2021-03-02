import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { products } from '../products';
import { Inject }  from '@angular/core';
import { playstations } from '../playstations';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html', 
  styleUrls: ['./product-items.component.css'],
  
})
export class ProductItemsComponent implements OnInit {
  // playstations = playstations;
  playstation;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ) { }
    addToCart(playstation) {
      this.cartService.addToCart(playstation);
      window.alert('Your product has been added to the cart!');
    }
  element:HTMLElement;
  
  Clicks;
  num;
  // AddClick(){
  //   this.Clicks = this.Clicks + 1;
  //   this.element = document.getElementById('CountedClicks') as HTMLElement;
  //   this.element.click();
  //   // this.element = this.Clicks;
  //   // this.num = this.Clicks+'Hits';
  //   // this.element= this.Clicks;
  //   }
  function() {
  }
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const playstationIdFromRoute = Number(routeParams.get('playstationId'));

  // Find the product that correspond with the id provided in route.
  this.playstation = playstations.find(playstation => playstation.id === playstationIdFromRoute);
  }

}
