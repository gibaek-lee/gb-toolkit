"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * throttler
 * @param ms : timeout milliseconds
 * @param fn : funtion to apply debounce
 * @returns : debounced function reference
 */
const throttler = function (ms = 0, fn = () => { }) {
    let id = null;
    return () => {
        if (id === null) {
            id = setTimeout(() => {
                clearTimeout(id);
                id = null;
                fn();
            }, ms);
        }
    };
};
exports.default = throttler;
//# sourceMappingURL=throttler.js.map