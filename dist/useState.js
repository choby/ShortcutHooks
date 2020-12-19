"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useState(initialState) {
    var isAlive = react_1.useRef(true);
    react_1.useEffect(function () {
        return function () { isAlive.current = false; };
    }, []);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setSafeState = function (value) {
        if (isAlive.current) {
            setState(value);
        }
    };
    return [state, setSafeState];
}
exports.default = useState;
