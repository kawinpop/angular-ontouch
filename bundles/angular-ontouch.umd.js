(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-ontouch', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular-ontouch'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directive/touch.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TouchDirective = /** @class */ (function () {
        function TouchDirective() {
            this.touch = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[ng-touch]'
                    },] }
        ];
        /** @nocollapse */
        TouchDirective.ctorParameters = function () { return []; };
        TouchDirective.propDecorators = {
            touch: [{ type: core.Output }],
            timemove: [{ type: core.Input }],
            onclick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            ontouchstart: [{ type: core.HostListener, args: ['touchstart', ['$event'],] }],
            ontouchmove: [{ type: core.HostListener, args: ['touchmove', ['$event'],] }],
            ontouchend: [{ type: core.HostListener, args: ['touchend', ['$event'],] }]
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AngularOntouchService.ctorParameters = function () { return []; };
        /** @nocollapse */ AngularOntouchService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AngularOntouchService_Factory() { return new AngularOntouchService(); }, token: AngularOntouchService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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

    exports.AngularOntouchComponent = AngularOntouchComponent;
    exports.AngularOntouchModule = AngularOntouchModule;
    exports.AngularOntouchService = AngularOntouchService;
    exports.TouchDirective = TouchDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-ontouch.umd.js.map
