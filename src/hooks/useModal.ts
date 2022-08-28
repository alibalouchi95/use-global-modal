import { useCallback, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = (modalContent: JSX.Element) => {
    const {open, close, setModalContent, visible} = useContext(ModalContext)

    const show = useCallback((_modalContent?: JSX.Element) => {
        setModalContent(_modalContent ? _modalContent : modalContent)
        open()
    }, [])

    return {show, close, visible}
}