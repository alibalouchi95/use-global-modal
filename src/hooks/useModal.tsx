import React, { useCallback, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = (modalContent: JSX.Element) => {
    const {open, close, setModalContent, visible} = useContext(ModalContext)

    const show = useCallback(() => {
        setModalContent(modalContent)
        open()
    }, [])

    return {show, close, visible}
}