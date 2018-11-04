import {Component, HostBinding, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line
  selector: 'product-image',
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }
}