"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.useModal = void 0;
var useModal_1 = require("./hooks/useModal");
Object.defineProperty(exports, "useModal", { enumerable: true, get: function () { return useModal_1.useModal; } });
var ModalContext_1 = require("./contexts/ModalContext");
Object.defineProperty(exports, "ModalProvider", { enumerable: true, get: function () { return ModalContext_1.ModalProvider; } });
