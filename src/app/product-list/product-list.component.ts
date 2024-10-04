import { Component, OnInit } from '@angular/core';
import { Product } from '../product/produc.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  producList: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  private getProductsList() {
    this.productService.getProductsList().subscribe((datos) => {
      this.producList = datos;
    });
  }

  editProduct(idP: number | undefined) {
    this.router.navigate(['edit-product', idP]);
  }

  deleteProduct(idP: number | undefined) {
    if (idP !== undefined)
      this.productService.deleteProduct(idP).subscribe({
        next: (res) => {
          alert('Se elimino el producto.');
          this.getProductsList();
        },
        error: (err) => console.log(err),
      });
  }
}
