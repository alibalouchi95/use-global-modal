import React from "react";
declare type Props = {
    ref: React.RefObject<React.ReactNode>;
    callBack: () => void;
};
export declare const useClickOutside: ({ ref, callBack }: Props) => void;
export {};
