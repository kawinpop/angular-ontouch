import { EventEmitter, Directive, Output, Input, HostListener, Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/touch.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TouchDirective {
    constructor() {
        this.touch = new EventEmitter();
        this.countTouchMove = 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onclick($event) {
        if (event.cancelable) {
            event.preventDefault();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ontouchstart($event) {
        if (this.timemove === 0) {
            this.touch.emit();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ontouchmove($event) {
        this.countTouchMove++;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ontouchend($event) {
        if (event.cancelable) {
            event.preventDefault();
            event.stopPropagation();
        }
        /** @type {?} */
        const time = this.timemove || 3;
        if (this.countTouchMove < time) {
            this.touch.emit();
        }
        this.countTouchMove = 0;
    }
}
TouchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ng-touch]'
            },] }
];
/** @nocollapse */
TouchDirective.ctorParameters = () => [];
TouchDirective.propDecorators = {
    touch: [{ type: Output }],
    timemove: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    ontouchstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
    ontouchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
    ontouchend: [{ type: HostListener, args: ['touchend', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TouchDirective.prototype.touch;
    /** @type {?} */
    TouchDirective.prototype.timemove;
    /** @type {?} */
    TouchDirective.prototype.countTouchMove;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-ontouch.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularOntouchService {
    constructor() { }
}
AngularOntouchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AngularOntouchService.ctorParameters = () => [];
/** @nocollapse */ AngularOntouchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularOntouchService_Factory() { return new AngularOntouchService(); }, token: AngularOntouchService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-ontouch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularOntouchComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
AngularOntouchComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular-ontouch',
                template: `
    <p>
      angular-ontouch works!
    </p>
  `
            }] }
];
/** @nocollapse */
AngularOntouchComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-ontouch.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularOntouchModule {
}
AngularOntouchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    AngularOntouchComponent,
                    TouchDirective
                ],
                imports: [],
                exports: [
                    AngularOntouchComponent,
                    TouchDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-ontouch.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularOntouchComponent, AngularOntouchModule, AngularOntouchService, TouchDirective };
//# sourceMappingURL=angular-ontouch.js.map
