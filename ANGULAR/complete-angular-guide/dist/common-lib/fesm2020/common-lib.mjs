import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class CommonLibService {
    constructor() { }
}
CommonLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CommonLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CommonLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CommonLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.9", type: CommonLibComponent, selector: "lib-common-lib", ngImport: i0, template: `
    <p>
      common-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-common-lib',
                    template: `
    <p>
      common-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CommonLibModule {
}
CommonLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CommonLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibModule, declarations: [CommonLibComponent], exports: [CommonLibComponent] });
CommonLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: CommonLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CommonLibComponent
                    ],
                    imports: [],
                    exports: [
                        CommonLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of common-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CommonLibComponent, CommonLibModule, CommonLibService };
//# sourceMappingURL=common-lib.mjs.map
