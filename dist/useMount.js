"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMount = function (func) { return react_1.useEffect(function () { return func(); }, []); };
exports.default = useMount;
