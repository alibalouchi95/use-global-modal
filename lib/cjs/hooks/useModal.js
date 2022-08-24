"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
var react_1 = require("react");
var ModalContext_1 = require("../contexts/ModalContext");
var useModal = function (modalContent) {
    var _a = (0, react_1.useContext)(ModalContext_1.ModalContext), open = _a.open, close = _a.close, setModalContent = _a.setModalContent, visible = _a.visible;
    var show = (0, react_1.useCallback)(function () {
        setModalContent(modalContent);
        open();
    }, []);
    return { show: show, close: close, visible: visible };
};
exports.useModal = useModal;
