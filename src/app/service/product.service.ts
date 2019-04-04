import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable, of} from 'rxjs';
import {products} from '../mock/mock-products';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = '/api/product/list';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  // mock数据使用的服务
  getProductsByMock(): Observable<Product[]> {
    return of(products);
  }

  addProductByMock(): Observable<Product[]> {
    return of(products);
  }

  // 以下为 http使用的服务
  list(): Observable<Product[]> {
    // HttpClient.get 默认情况下把响应体当做无类型的 JSON 对象装入 Observable<T>进行返回。
    // 如果指定了可选的模板类型 <Product[]>，就会给返回你一个类型化的对象。
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(
        tap(next => console.log('fetched products')),
        catchError((err, caught) => {
          console.log(`请求${this.productsUrl}失败！`);
          console.log('err对象：');
          console.log(err);
          console.log('caught对象：');
          console.log(caught);

          // 返回安全的假数据，以便后面的程序正常运行
          return of([]);
        }),
      );
  }

  createByParam(product: Product): Observable<any> {
    const httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'my-auth-token',
    };
    const httpParams = new HttpParams()
      .append('name', product.name)
      .append('price', product.price.toString())
      .append('stock', product.stock.toString());
    const options = {
      headers: httpHeaders,
    }
    return this.http
      .post('/api/product/createByParam', httpParams, options)
      .pipe(
        tap(next => console.log('post product')),
      );
  }

  createByJson(product: Product): Observable<any> {
    const httpHeaders = {
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    return this.http
      .post('/api/product/createByJson', product, options)
      .pipe(
        tap(next => console.log('post product')),
      );
  }

  getByParam(product: Product): Observable<any> {
    const httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'my-auth-token',
    };
    const httpParams = new HttpParams()
      .append('name', product.name)
      .append('price', product.price.toString())
      .append('stock', product.stock.toString());
    const options = {
      headers: httpHeaders,
      params: httpParams,
    }
    return this.http
      .get('/api/product/getByParam', options)
      .pipe(
        tap(next => console.log('get product')),
      );
  }

  getByRestful(product: Product): Observable<any> {
    const httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'my-auth-token',
    };
    const options = {
      headers: httpHeaders,
    }
    return this.http
      .get(`/api/product/getByRestful/${product.name}`, options)
      .pipe(
        tap(next => console.log('get product')),
      );
  }
}
