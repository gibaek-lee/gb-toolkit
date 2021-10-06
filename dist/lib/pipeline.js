"use strict";
// https://ginnyang.notion.site/Pipeline-as-is-to-be-c5041e509d7943d4b05564314839077c
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline = (...fns) => {
    return (input) => {
        return fns.reduce((accum, fn) => fn(accum), input);
    };
};
exports.default = pipeline;
//# sourceMappingURL=pipeline.js.map