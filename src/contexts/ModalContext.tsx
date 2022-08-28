import React, { createContext, ReactNode, useEffect, useState } from "react";
import Modal from '../components/CModal'

export type ModalOptions = {
    disableDismissOnOutsideClick: boolean
}

interface IModal {
    open: () => void
    close: () => void
    setModalContent: (modalContent: JSX.Element) => void
    visible: boolean
    setModalOptions: (options: ModalOptions) => void
}

type Props = {
    children: ReactNode,
    options?: ModalOptions
}

export const ModalContext = createContext<IModal>({open: () => {}, close: () => {}, setModalContent: () => {}, visible: false, setModalOptions: () => {}})

export const ModalProvider = ({ children, options }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalContent, _setModalContent] = useState<JSX.Element>()
    const [modalOptions, _setModalOptions] = useState<ModalOptions>()

    useEffect(() => {
        if(options) _setModalOptions(options)
    }, [options])

    const open = () => setShowModal(true)
    const close = () => setShowModal(false)
    const setModalContent = (modalContent: JSX.Element) => {
        _setModalContent(modalContent)
    }
    const setModalOptions = (options: ModalOptions) => {
        _setModalOptions(options)
    }

    return <ModalContext.Provider value={{ open, close, setModalContent, visible: showModal, setModalOptions }}>
        {children}
        {showModal ?
            <Modal onDismiss={close} disableOutsideClick={modalOptions?.disableDismissOnOutsideClick}>
                {modalContent}
            </Modal>
        : null}
    </ModalContext.Provider>
}