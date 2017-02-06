/*
 * tesla-car.component.ts
 */

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-car">
      <div class="tesla-wheels">
        <div class="tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}"></div>
        <div class="tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}"></div>
      </div>
    </div>
  `,
  styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {
  // Angular will tell the component to treat props coming down through the @Input() as immutable.
  @Input() wheelsize: number;
  constructor() {};
}
