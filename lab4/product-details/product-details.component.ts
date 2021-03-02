import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { playstations } from '../playstations';
import { computers } from '../computers';
import { arts } from '../arts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  playstations = playstations;
  playstation;
  products=products;
  product;
  computers = computers;
  arts= arts;
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(private route: ActivatedRoute,
    private cartService: CartService) { }
    share() {
      window.open('https://t.me/todolist1');
    }
    // remove(){
    //   this.products = this.products.filter((x) => x.id !== index);
    // }
  ngOnInit() {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  // if (this.product.id) {
  //   this.products = playstations;
  // }
  // if(this.product.id){
  //   this.products = computers;
  // }
//   if(this.art.id)
// {
//   this.art = arts;
// }
  }

}
