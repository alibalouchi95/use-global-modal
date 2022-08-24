import React from 'react'
import OutsideClick from './OutsideClick'

type Props = {
    children: JSX.Element | undefined;
    styles?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    onDismiss: () => void
}

const CModal = ({ children, styles, onDismiss }: Props) => {
    return <OutsideClick callBack={onDismiss}>
        <div style={{
            ...styles, padding: "5px",
            backgroundColor: "white"
        }}>
            {children}
        </div>
    </OutsideClick>
}

export default CModal