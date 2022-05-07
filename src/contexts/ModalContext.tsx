import React, { createContext, ReactNode, useState } from "react";
import Modal from '../components/CModal'

interface IModal {
    open: () => void
    close: () => void
    setModalContent: (modalContent: JSX.Element) => void
    visible: boolean
}

type Props = {
    children: ReactNode
}

export const ModalContext = createContext<IModal>({open: () => {}, close: () => {}, setModalContent: () => {}, visible: false})

export const ModalProvider = ({ children }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalContent, _setModalContent] = useState<JSX.Element>()

    const open = () => setShowModal(true)
    const close = () => setShowModal(false)
    const setModalContent = (modalContent: JSX.Element) => {
        _setModalContent(modalContent)
    }

    return <ModalContext.Provider value={{ open, close, setModalContent, visible: showModal }}>
        {children}
        {showModal ?
            <Modal onDismiss={close}>
                {modalContent}
            </Modal>
        : null}
    </ModalContext.Provider>
}