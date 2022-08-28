import { useCallback, useContext } from "react";
import { ModalContext, ModalOptions } from "../contexts/ModalContext";

export const useModal = (modalContent: JSX.Element) => {
    const {open, close, setModalContent, visible, setModalOptions} = useContext(ModalContext)

    const show = useCallback((_modalContent?: JSX.Element, modalOptions?: ModalOptions) => {
        setModalContent(_modalContent ? _modalContent : modalContent)
        setModalOptions(modalOptions ? modalOptions : {disableDismissOnOutsideClick: false})
        open()
    }, [])

    return {show, close, visible}
}