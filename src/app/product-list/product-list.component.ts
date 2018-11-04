import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  // tslint:disable-next-line
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit() {
  }

}
