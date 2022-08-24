import { useCallback, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
export var useModal = function (modalContent) {
    var _a = useContext(ModalContext), open = _a.open, close = _a.close, setModalContent = _a.setModalContent, visible = _a.visible;
    var show = useCallback(function () {
        setModalContent(modalContent);
        open();
    }, []);
    return { show: show, close: close, visible: visible };
};
