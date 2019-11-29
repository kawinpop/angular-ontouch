/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/touch.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter, Input } from '@angular/core';
export class TouchDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91Y2guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1vbnRvdWNoLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS90b3VjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtyRixNQUFNLE9BQU8sY0FBYztJQXVDekI7UUFwQ0EsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLM0IsbUJBQWMsR0FBRyxDQUFDLENBQUM7SUFnQ2YsQ0FBQzs7Ozs7SUE5QjhCLE9BQU8sQ0FBQyxNQUFNO1FBQy9DLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7OztJQUV1QyxZQUFZLENBQUMsTUFBTTtRQUN6RCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7OztJQUVzQyxXQUFXLENBQUMsTUFBTTtRQUN2RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFcUMsVUFBVSxDQUFDLE1BQU07UUFDckQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUUxQixDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7OztvQkFHRSxNQUFNO3VCQUdOLEtBQUs7c0JBS0wsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFNaEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFNckMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFJcEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXhCcEMsK0JBQzJCOztJQUUzQixrQ0FDaUI7O0lBRWpCLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nLXRvdWNoXSdcbn0pXG5leHBvcnQgY2xhc3MgVG91Y2hEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKVxuICB0b3VjaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICB0aW1lbW92ZTogbnVtYmVyO1xuXG4gIGNvdW50VG91Y2hNb3ZlID0gMDtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soJGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsnJGV2ZW50J10pIG9udG91Y2hzdGFydCgkZXZlbnQpIHtcbiAgICBpZiAodGhpcy50aW1lbW92ZSA9PT0gMCkge1xuICAgICAgdGhpcy50b3VjaC5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSkgb250b3VjaG1vdmUoJGV2ZW50KSB7XG4gICAgdGhpcy5jb3VudFRvdWNoTW92ZSsrO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnLCBbJyRldmVudCddKSBvbnRvdWNoZW5kKCRldmVudCkge1xuICAgIGlmIChldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IHRpbWUgPSB0aGlzLnRpbWVtb3ZlIHx8IDM7XG4gICAgaWYgKHRoaXMuY291bnRUb3VjaE1vdmUgPCB0aW1lKSB7XG4gICAgICB0aGlzLnRvdWNoLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jb3VudFRvdWNoTW92ZSA9IDA7XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICApIHsgfVxuXG59XG4iXX0=