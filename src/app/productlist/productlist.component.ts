import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { CartService } from '../cart.service'
import { Product } from '../product'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {



  constructor(private ps: ProductService, private cart: CartService) {
    this.ps = ps
    this.cart = cart
  }

  productlist: any
  array: any


  ngOnInit(): void {
    this.ps.get().subscribe((data) => {
      this.productlist = data

      console.log(this.productlist)

    })
  }
  addToCart(array: any) {
    this.cart.addToCart(array)
  }
  addQuantity(array: any) {
    if (array.product_quantity >= 0) {
      array.product_quantity = array.product_quantity + 1
    }
  }
  minusQuantity(array: any) {
    if (array.product_quantity >= 1) {
      array.product_quantity = array.product_quantity - 1
    }


  }
}


