import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import "./Modal.css"

type Props = {
    children: React.ReactNode,
    callBack: () => void
}

const OutsideClick = ({children, callBack}: Props) => {
  const wrapperRef = useRef(null);
  useClickOutside({ref: wrapperRef, callBack });

  return (<div 
    className="modal-container">
      <div ref={wrapperRef}>{children}</div>
    </div>);
}

export default OutsideClick;
