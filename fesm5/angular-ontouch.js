import { EventEmitter, Directive, Output, Input, HostListener, Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/touch.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TouchDirective = /** @class */ (function () {
    function TouchDirective() {
        this.touch = new EventEmitter();
        this.countTouchMove = 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    TouchDirective.prototype.onclick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (event.cancelable) {
            event.preventDefault();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TouchDirective.prototype.ontouchstart = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.timemove === 0) {
            this.touch.emit();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TouchDirective.prototype.ontouchmove = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.countTouchMove++;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TouchDirective.prototype.ontouchend = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (event.cancelable) {
            event.preventDefault();
            event.stopPropagation();
        }
        /** @type {?} */
        var time = this.timemove || 3;
        if (this.countTouchMove < time) {
            this.touch.emit();
        }
        this.countTouchMove = 0;
    };
    TouchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ng-touch]'
                },] }
    ];
    /** @nocollapse */
    TouchDirective.ctorParameters = function () { return []; };
    TouchDirective.propDecorators = {
        touch: [{ type: Output }],
        timemove: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
        ontouchstart: [{ type: HostListener, args: ['touchstart', ['$event'],] }],
        ontouchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }],
        ontouchend: [{ type: HostListener, args: ['touchend', ['$event'],] }]
    };
    return TouchDirective;
}());
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
var AngularOntouchService = /** @class */ (function () {
    function AngularOntouchService() {
    }
    AngularOntouchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularOntouchService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularOntouchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularOntouchService_Factory() { return new AngularOntouchService(); }, token: AngularOntouchService, providedIn: "root" });
    return AngularOntouchService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-ontouch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularOntouchComponent = /** @class */ (function () {
    function AngularOntouchComponent() {
    }
    /**
     * @return {?}
     */
    AngularOntouchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    AngularOntouchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-angular-ontouch',
                    template: "\n    <p>\n      angular-ontouch works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    AngularOntouchComponent.ctorParameters = function () { return []; };
    return AngularOntouchComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-ontouch.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularOntouchModule = /** @class */ (function () {
    function AngularOntouchModule() {
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
    return AngularOntouchModule;
}());

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
