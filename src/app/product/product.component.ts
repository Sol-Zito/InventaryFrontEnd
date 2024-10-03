import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input('idProduct') idProduct: number;
  @Input('name') name: string;
  @Input('descripcion') description: string;
  @Input('price') price: number;
  @Input('stock') stock: number;
}
