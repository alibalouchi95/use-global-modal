import React from 'react';
declare type Props = {
    children: JSX.Element | undefined;
    styles?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    onDismiss: () => void;
};
declare const CModal: ({ children, styles, onDismiss }: Props) => JSX.Element;
export default CModal;
