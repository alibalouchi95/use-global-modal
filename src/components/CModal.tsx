import React from 'react'
import OutsideClick from './OutsideClick'
import "./Modal.css"

type Props = {
    children: JSX.Element | undefined;
    styles?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    onDismiss: () => void
}

const CModal = ({children, styles, onDismiss}:Props) => {
  return <OutsideClick callBack={onDismiss}>
    <div className='modal' style={styles}>
        {children}
    </div>
    </OutsideClick>
}

export default CModal