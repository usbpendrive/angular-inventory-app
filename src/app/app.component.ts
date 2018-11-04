import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  // tslint:disable-next-line
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  product: Product[];

  constructor() {
    this.product = [
      new Product(
      'ARTEZA',
      'Arteza Real Brush Pens, 48 Colors for Watercolor Painting',
      '/assets/images/products/arteza-real-brush-pens.jpg',
      ['Painting', 'Brush', 'Stationery'],
      22.6),
      new Product(
        'WATERCOLOR',
        'Watercolor Brush Pens,GUOfeudallord 20 Color Paint Brush Markers',
        '/assets/images/products/watercolor-brush-pen.jpg',
        ['Painting', 'Brush', 'Art'],
        15.99
      ),
      new Product(
        'GC100',
        'GC 100 Dual Tip Brush Pen Marker Set Flexible Brush & Fineliner Tips',
        '/assets/images/products/gc-100-dual-tip-brush-pen.jpg',
        ['Art', 'Supplies', 'Refills'],
        35.99
      )
    ];
  }

  productWasSelected(product: Product) {
    console.log('Product clicked', product);
  }
}
