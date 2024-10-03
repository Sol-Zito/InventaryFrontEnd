import { Component, OnInit } from '@angular/core';
import { Product } from '../product/produc.module';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  producList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getProductsList().subscribe((datos) => {
      this.producList = datos;
    });
  }
}
