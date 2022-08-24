import React, { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
var OutsideClick = function (_a) {
    var children = _a.children, callBack = _a.callBack;
    var wrapperRef = useRef(null);
    useClickOutside({ ref: wrapperRef, callBack: callBack });
    return (React.createElement("div", { style: {
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
        } },
        React.createElement("div", { ref: wrapperRef }, children)));
};
export default OutsideClick;
