import { Component } from '@angular/core';
import { Product } from '../product/produc.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrl: './save-product.component.css',
})
export class SaveProductComponent {
  constructor(private saveP: ProductService, private route: Router) {}

  nameProduct: string;
  description: string;
  price: number;
  stock: number;

  goHome() {
    this.route.navigate(['/']);
  }

  saveProduct() {
    let productToSave: Product = {
      name: this.nameProduct,
      description: this.description,
      price: this.price,
      stock: this.stock,
    };

    this.saveP.saveProduct(productToSave).subscribe({
      next: (datos) => {
        console.log('Producto guardado: ' + productToSave.description);
        this.goHome();
      },
      error: (error: any) => console.log(error),
    });
  }
}
