import { Injectable } from '@angular/core';
import { product, listProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ListingProducts : Array<product> = listProducts;
  constructor() { }

  List() : Array<product>{
      return this.ListingProducts
  }
}
