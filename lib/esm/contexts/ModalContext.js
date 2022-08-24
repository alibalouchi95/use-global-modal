import React, { createContext, useState } from "react";
import Modal from '../components/CModal';
export var ModalContext = createContext({ open: function () { }, close: function () { }, setModalContent: function () { }, visible: false });
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), showModal = _b[0], setShowModal = _b[1];
    var _c = useState(), modalContent = _c[0], _setModalContent = _c[1];
    var open = function () { return setShowModal(true); };
    var close = function () { return setShowModal(false); };
    var setModalContent = function (modalContent) {
        _setModalContent(modalContent);
    };
    return React.createElement(ModalContext.Provider, { value: { open: open, close: close, setModalContent: setModalContent, visible: showModal } },
        children,
        showModal ?
            React.createElement(Modal, { onDismiss: close }, modalContent)
            : null);
};
