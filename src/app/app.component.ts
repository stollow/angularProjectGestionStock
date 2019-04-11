import { Component, OnInit } from '@angular/core';
import { product } from './models/product'
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestionStock';
  listProductService : ProductService
  listProducts : Array<product>
  ngOnInit(){
    this.listProductService = new ProductService();
    this.listProducts = this.listProductService.List();
  }

  removeItem(product){
    this.listProducts = this.listProducts.filter(item => product != item);
  }
}
