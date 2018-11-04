import {Component, HostBinding, Input} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent{
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }
}
