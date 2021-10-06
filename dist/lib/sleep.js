"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sleep
 * @param ms: sleep time in milliseconds
 * @returns: constructed Promise
 */
const sleep = (ms) => {
    return new Promise(res => setTimeout(() => res(`${ms} sleep finish`), ms));
};
exports.default = sleep;
//# sourceMappingURL=sleep.js.map