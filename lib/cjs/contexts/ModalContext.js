"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.ModalContext = void 0;
var react_1 = __importStar(require("react"));
var CModal_1 = __importDefault(require("../components/CModal"));
exports.ModalContext = (0, react_1.createContext)({ open: function () { }, close: function () { }, setModalContent: function () { }, visible: false });
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)(), modalContent = _c[0], _setModalContent = _c[1];
    var open = function () { return setShowModal(true); };
    var close = function () { return setShowModal(false); };
    var setModalContent = function (modalContent) {
        _setModalContent(modalContent);
    };
    return react_1.default.createElement(exports.ModalContext.Provider, { value: { open: open, close: close, setModalContent: setModalContent, visible: showModal } },
        children,
        showModal ?
            react_1.default.createElement(CModal_1.default, { onDismiss: close }, modalContent)
            : null);
};
exports.ModalProvider = ModalProvider;
