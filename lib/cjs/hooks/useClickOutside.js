"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickOutside = void 0;
var react_1 = require("react");
var useClickOutside = function (_a) {
    var ref = _a.ref, callBack = _a.callBack;
    var customAlert = function (event) {
        //@ts-ignore
        if (ref.current && !ref.current.contains(event.target)) {
            callBack();
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("mousedown", customAlert);
        return function () {
            document.removeEventListener("mousedown", callBack);
        };
    }, [ref]);
};
exports.useClickOutside = useClickOutside;
