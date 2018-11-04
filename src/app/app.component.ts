import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  // tslint:disable-next-line
  selector: 'inventory-app-root',
  template: `
    <div class="inventory-app">
      <h1>{{ product.name }}</h1>
      <span>{{ product.sku }}</span>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'ARTEZA',
      'Arteza Real Brush Pens, 48 Colors for Watercolor Painting',
      '/assets/images/products/arteza-real-brush-pens.jpg',
      ['Painting', 'Brush', 'Stationery'],
      22.6
    );
  }
}
