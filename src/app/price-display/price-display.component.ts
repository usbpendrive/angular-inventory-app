import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'price-display',
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;

  constructor() { }

}
