import React, { ReactNode } from "react";
interface IModal {
    open: () => void;
    close: () => void;
    setModalContent: (modalContent: JSX.Element) => void;
    visible: boolean;
}
declare type Props = {
    children: ReactNode;
};
export declare const ModalContext: React.Context<IModal>;
export declare const ModalProvider: ({ children }: Props) => JSX.Element;
export {};
