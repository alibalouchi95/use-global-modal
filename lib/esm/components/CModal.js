var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import OutsideClick from './OutsideClick';
var CModal = function (_a) {
    var children = _a.children, styles = _a.styles, onDismiss = _a.onDismiss;
    return React.createElement(OutsideClick, { callBack: onDismiss },
        React.createElement("div", { style: __assign(__assign({}, styles), { padding: "5px", backgroundColor: "white" }) }, children));
};
export default CModal;
