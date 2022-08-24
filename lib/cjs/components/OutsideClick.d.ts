import React from "react";
declare type Props = {
    children: React.ReactNode;
    callBack: () => void;
};
declare const OutsideClick: ({ children, callBack }: Props) => JSX.Element;
export default OutsideClick;
