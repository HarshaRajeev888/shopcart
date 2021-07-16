import { Component, OnInit } from '@angular/core';
import {Product} from '../product'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
model=new Product("","","","","")
save(){
  console.log("Product_ID",this.model.pid)
  console.log("Product_Name",this.model.pname)
  console.log("Product_Price",this.model.pprice)
  console.log("Product_Description",this.model.pdes)
  console.log("Product_Quantity",this.model.pqty)
}
}

