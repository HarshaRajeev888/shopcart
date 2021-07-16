import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 items:any=[]
  constructor() { }

  addToCart(array:any){
this.items.push(array)
  }
getitems(){
  return this.items
}






}
