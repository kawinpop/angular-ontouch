import { EventEmitter } from '@angular/core';
export declare class TouchDirective {
    touch: EventEmitter<any>;
    timemove: number;
    countTouchMove: number;
    onclick($event: any): void;
    ontouchstart($event: any): void;
    ontouchmove($event: any): void;
    ontouchend($event: any): void;
    constructor();
}
