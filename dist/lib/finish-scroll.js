"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RES_SCROLL_FINISH = void 0;
/**
 * finish-scroll
 * @param ms: interval time observe scroll continued
 * @returns Promise<unkown>
 */
exports.RES_SCROLL_FINISH = 'scroll finished';
const finishScroll = (ms, refMockScrollY) => {
    let prevY = window ? window.scrollY : 0;
    return new Promise((resolve) => {
        let id = setInterval(() => {
            const compareParam = window ? window.scrollY : refMockScrollY.scrollY;
            if (prevY !== compareParam) {
                prevY = compareParam;
            }
            else {
                clearInterval(id);
                resolve(exports.RES_SCROLL_FINISH);
            }
        }, ms);
    });
};
exports.default = finishScroll;
//# sourceMappingURL=finish-scroll.js.map