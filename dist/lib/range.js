"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range = ({ N, start = 0, delta = 1 }) => {
    if (N === undefined) {
        throw new Error('N is not defined');
    }
    const rangeArray = [];
    for (let i = 0; i < N; i++) {
        rangeArray.push(start + i * delta);
    }
    return rangeArray;
};
exports.default = range;
//# sourceMappingURL=range.js.map