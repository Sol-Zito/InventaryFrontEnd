import { Component, OnInit } from '@angular/core';
import { Product } from '../product/produc.module';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private pService: ProductService,
    private route: Router,
    private Aroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.Aroute.snapshot.params['id'];
    this.pService.getProducById(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (err) => console.log(err),
    });
  }

  saveProduct() {
    this.pService.editProduct(this.id, this.product).subscribe({
      next: (data) => {
        this.route.navigate(['/']);
      },
      error: (err) => console.log(err),
    });
  }
}
