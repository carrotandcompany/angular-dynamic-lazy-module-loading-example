import {
  Compiler, createNgModuleRef,
  Injectable,
  Injector,
  ViewContainerRef,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LazyModuleLoader {
  constructor(private compiler: Compiler, private injector: Injector) {}

  async loadModule(
    modulePath: string,
    moduleName: string,
    anchor: ViewContainerRef
  ) {
    // load the bundle
    let loadedFile = await import(`./lazy/${modulePath}`);
    // get the module class from the loaded file
    const loadedModule = loadedFile[moduleName];
    // instantiate the module
    const moduleRef = createNgModuleRef(loadedModule, this.injector);
    // create the component and add it to the anchor
    anchor.createComponent(loadedModule.entryComponent, {
      injector: this.injector,
      ngModuleRef: moduleRef,
    });
  }

  async loadModuleDeprecated(
    modulePath: string,
    moduleName: string,
    anchor: ViewContainerRef
  ) {
    // Deprecated since v13
    // load the bundle
    let loadedFile =  await import(`./lazy/${modulePath}`);
    // get the module class from the loaded file
    const loadedModule = loadedFile[moduleName];
    // compile the module and instantiate it via the factory
    const moduleFactory = await this.compiler.compileModuleAsync(loadedModule);
    const moduleRef = moduleFactory.create(this.injector);
    // create the component and add it to the anchor via the component factory
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
      loadedModule.entryComponent
    );
    anchor.createComponent(componentFactory);
  }
}
