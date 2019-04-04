import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-learning-http',
  templateUrl: './learning-http.component.html',
  styleUrls: ['./learning-http.component.css']
})
export class LearningHttpComponent implements OnInit {

  products: Product[];
  createForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    stock: new FormControl(),
  });

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  productList() {
    this.productService.list().subscribe(
      items => {
        this.products = items;
        console.log('subscribe内部的next对象：')
        console.log(items);
      }
    );
    console.log(this.products);
  }

  getByParam() {
    const product: Product = {
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      stock: this.createForm.value.stock,
    };
    this.productService.getByParam(product).subscribe(
      next => console.log(next),
    );
  }

  getByRestful() {
    const product: Product = {
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      stock: this.createForm.value.stock,
    };
    this.productService.getByRestful(product).subscribe(
      next => console.log(next),
    );
  }

  createByParam() {
    const product: Product = {
      name: this.createForm.value.name,
      price: this.createForm.value.price,
      stock: this.createForm.value.stock,
    };
    this.productService.createByParam(product).subscribe(
      next => console.log(next),
    );
  }

  createByJson() {
    const product: Product = {
      name: this.createForm.value.name,
      price: parseInt(this.createForm.value.price, 10),
      stock: parseInt(this.createForm.value.stock, 10),
    };
    this.productService.createByJson(product).subscribe(
      next => console.log(next),
    );
  }
}
