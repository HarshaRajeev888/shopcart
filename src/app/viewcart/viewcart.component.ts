import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import {ProductService} from '../product.service'
import { ProductlistComponent } from '../productlist/productlist.component'; 

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  total:number=0
  totalamount:number=0

  items=this.cart.getitems()
   
  constructor(private cart:CartService) {
    this.cart=cart
   }
  

  ngOnInit(): void {
  }

 calcTotalCost(){
let total=0
for(var i=0;i<this.items.length;i++){
  total+=this.items[i].product_price * this.items[i].product_quantity
  this.totalamount=total
}
return total
 }

}
