import { useEffect } from "react";
export var useClickOutside = function (_a) {
    var ref = _a.ref, callBack = _a.callBack;
    var customAlert = function (event) {
        //@ts-ignore
        if (ref.current && !ref.current.contains(event.target)) {
            callBack();
        }
    };
    useEffect(function () {
        document.addEventListener("mousedown", customAlert);
        return function () {
            document.removeEventListener("mousedown", callBack);
        };
    }, [ref]);
};
