"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var OutsideClick_1 = __importDefault(require("./OutsideClick"));
var CModal = function (_a) {
    var children = _a.children, styles = _a.styles, onDismiss = _a.onDismiss;
    return react_1.default.createElement(OutsideClick_1.default, { callBack: onDismiss },
        react_1.default.createElement("div", { style: __assign(__assign({}, styles), { padding: "5px", backgroundColor: "white" }) }, children));
};
exports.default = CModal;
