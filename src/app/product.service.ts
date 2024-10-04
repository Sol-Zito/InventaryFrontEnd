import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/produc.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlBase = 'http://localhost:8080/inventary-app';

  constructor(private clientHttp: HttpClient) {}

  getProductsList(): Observable<Product[]> {
    let url: string = this.urlBase.concat('/products');
    console.log(url);

    return this.clientHttp.get<Product[]>(url);
  }

  saveProduct(product: Product): Observable<Object> {
    let url: string = this.urlBase.concat('/saveProduct');
    console.log('se cargo el producto');
    return this.clientHttp.post(url, product);
  }

  getProducById(idProduct: number) {
    let url: string = this.urlBase.concat(`/product/${idProduct}`);
    return this.clientHttp.get<Product>(url);
  }

  editProduct(idProduct: number, product: Product) {
    let url: string = this.urlBase.concat(`/edit-product/${idProduct}`);
    return this.clientHttp.put<Product>(url, product);
  }

  deleteProduct(idProduct: number): Observable<Object> {
    let url: string = this.urlBase.concat(`/deleteProduct/${idProduct}`);
    return this.clientHttp.delete(url);
  }
}
