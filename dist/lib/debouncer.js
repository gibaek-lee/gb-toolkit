"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * debouncer
 * @param ms : timeout milliseconds
 * @param fn : funtion to apply debounce
 * @returns : debounced function reference
 */
const debouncer = function (ms = 0, fn = () => { }) {
    let id;
    return () => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            clearTimeout(id);
            fn();
        }, ms);
    };
};
exports.default = debouncer;
//# sourceMappingURL=debouncer.js.map