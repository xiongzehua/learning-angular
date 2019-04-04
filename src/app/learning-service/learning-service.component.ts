import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-learning-service',
  templateUrl: './learning-service.component.html',
  styleUrls: ['./learning-service.component.css']
})
export class LearningServiceComponent implements OnInit {
  products: Product[];
  productobserver1: Product[];
  productobserver2: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsByMock().subscribe(
      items => {
        this.productobserver1 = items;
      }
    );
    this.productService.getProductsByMock().subscribe(
      items => {
        this.productobserver2 = items;
      }
    );
  }

  getProducts() {
    this.productService.getProductsByMock().subscribe(
      items => {
        this.products = items;
        console.log('subscribe内部的next对象：');
        console.log(items);
      }
    );
    console.log(this.products);
  }

  getProducts() {

  }

}
