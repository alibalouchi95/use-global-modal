import React, { useEffect } from "react";

type Props = {
    ref: React.RefObject<React.ReactNode>
    callBack: () => void
}

export const useClickOutside = ({ref, callBack}: Props) => {
    const customAlert = (event: Event) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)){
        callBack()
      }
    }
    useEffect(() => {
      document.addEventListener("mousedown", customAlert);
      return () => {
        document.removeEventListener("mousedown", callBack);
      };
    }, [ref]);
  }