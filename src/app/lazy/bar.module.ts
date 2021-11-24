import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bar',
  template: `<div>Bar Component</div>`,
  styles: [
    `
      :host {
        padding: 10px;
        margin: 5px;
        display: block;
        background-color: aliceblue;
      }
    `,
  ],
})
export class BarComponent {}

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [BarComponent],
})
export class BarModule {
  static entryComponent: any = BarComponent;

  constructor() {
    console.log('BarModule constructor');
  }
}
