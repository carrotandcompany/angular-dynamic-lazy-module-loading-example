// Example written by Carrot & Company (https://www.cnc.io)
// inspired by
// https://indepth.dev/posts/1167/lazy-loading-angular-modules-with-ivy

import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LazyModuleLoader } from './lazy-module-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  constructor(
    private injector: Injector,
    private lazyModuleLoader: LazyModuleLoader
  ) {}

  async loadModule(filename: string, className: string) {
    await this.lazyModuleLoader.loadModule(
      filename,
      className,
      this.anchor
    );

    // Deprecated since V13
    // await this.lazyModuleLoader.loadModuleDeprecated(
    //   filename,
    //   className,
    //   this.anchor
    // );
  }
}
