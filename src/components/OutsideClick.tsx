import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

type Props = {
  children: React.ReactNode,
  callBack: () => void
}

const OutsideClick = ({ children, callBack }: Props) => {
  const wrapperRef = useRef(null);
  useClickOutside({ ref: wrapperRef, callBack });

  return (<div
    style={{
      position: "absolute",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 20,
      top: 0,
    }}>
    <div ref={wrapperRef}>{children}</div>
  </div>);
}

export default OutsideClick;
