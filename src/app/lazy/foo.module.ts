import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'foo',
  template: `<div>Foo Component</div>`,
  styles: [
    `
      :host {
        padding: 10px;
        margin: 5px;
        display: block;
        background-color: lavenderblush;
      }
    `,
  ],
})
export class FooComponent {}

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [FooComponent],
})
export class FooModule{
  static entryComponent: any = FooComponent;
  constructor() {
    console.log('FooModule constructor');
  }
}
