"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BottomPanelModule = _interopRequireDefault(require("./BottomPanel.module.css"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["panelClass", "panelBodyCSS", "panelDragIcon", "topHeight", "bottomHeight", "middleheight", "isVisible", "isKeysFunctional", "isNavigationButtons", "isMiddleFunctional", "throttleTime", "panelState", "getPanelState"];
/* eslint-disable react-hooks/exhaustive-deps */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function BottomPanel(_ref) {
  var _ref$panelClass = _ref.panelClass,
    panelClass = _ref$panelClass === void 0 ? "" : _ref$panelClass,
    _ref$panelBodyCSS = _ref.panelBodyCSS,
    panelBodyCSS = _ref$panelBodyCSS === void 0 ? {} : _ref$panelBodyCSS,
    _ref$panelDragIcon = _ref.panelDragIcon,
    panelDragIcon = _ref$panelDragIcon === void 0 ? null : _ref$panelDragIcon,
    _ref$topHeight = _ref.topHeight,
    topHeight = _ref$topHeight === void 0 ? null : _ref$topHeight,
    _ref$bottomHeight = _ref.bottomHeight,
    bottomHeight = _ref$bottomHeight === void 0 ? null : _ref$bottomHeight,
    _ref$middleheight = _ref.middleheight,
    middleheight = _ref$middleheight === void 0 ? null : _ref$middleheight,
    _ref$isVisible = _ref.isVisible,
    isVisible = _ref$isVisible === void 0 ? true : _ref$isVisible,
    _ref$isKeysFunctional = _ref.isKeysFunctional,
    isKeysFunctional = _ref$isKeysFunctional === void 0 ? true : _ref$isKeysFunctional,
    _ref$isNavigationButt = _ref.isNavigationButtons,
    isNavigationButtons = _ref$isNavigationButt === void 0 ? true : _ref$isNavigationButt,
    _ref$isMiddleFunction = _ref.isMiddleFunctional,
    isMiddleFunctional = _ref$isMiddleFunction === void 0 ? true : _ref$isMiddleFunction,
    _ref$throttleTime = _ref.throttleTime,
    throttleTime = _ref$throttleTime === void 0 ? 5 : _ref$throttleTime,
    _ref$panelState = _ref.panelState,
    panelState = _ref$panelState === void 0 ? "bottom" : _ref$panelState,
    _ref$getPanelState = _ref.getPanelState,
    getPanelState = _ref$getPanelState === void 0 ? function () {} : _ref$getPanelState,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isResizing = _useState2[0],
    setIsResizing = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    startY = _useState4[0],
    setStartY = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    startHeight = _useState6[0],
    setStartHeight = _useState6[1];
  var _useState7 = (0, _react.useState)(80),
    _useState8 = _slicedToArray(_useState7, 2),
    containerHeight = _useState8[0],
    setContainerHeight = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    animationClass = _useState10[0],
    setAnimationClass = _useState10[1];
  var containerRef = (0, _react.useRef)(null);
  var handleTop = function handleTop() {
    getPanelState("top");
    var ht = topHeight || window.innerHeight;
    setAnimationClass(_BottomPanelModule.default.fullScreenTransition);
    setContainerHeight(ht - 40);
    setTimeout(function () {
      setContainerHeight(ht - 80);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  var handleMiddle = function handleMiddle() {
    getPanelState("middle");
    var ht = middleheight || window.innerHeight;
    setAnimationClass(_BottomPanelModule.default.halfScreenTransition);
    setContainerHeight(ht / 2 + 50);
    setTimeout(function () {
      setContainerHeight(ht / 2 + 50);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  var handleBottom = function handleBottom() {
    getPanelState("bottom");
    setAnimationClass(_BottomPanelModule.default.startScreenTransition);
    setContainerHeight(10);
    setTimeout(function () {
      setContainerHeight(bottomHeight || 80);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  var startResize = function startResize(e) {
    setIsResizing(true);
    setStartY(e.clientY || e.targetTouches[0].screenY);
    setStartHeight(containerHeight);
  };
  var throttle = function throttle(callback, delay) {
    var lastCall = 0;
    return function () {
      var now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback.apply(this, arguments);
      }
    };
  };
  var throttledResize = throttle(function (e) {
    if (isResizing) {
      var _e$targetTouches$;
      var deltaY = (e.clientY || (e === null || e === void 0 || (_e$targetTouches$ = e.targetTouches[0]) === null || _e$targetTouches$ === void 0 ? void 0 : _e$targetTouches$.screenY)) - startY;
      setContainerHeight(startHeight - deltaY * 3);
    }
  }, throttleTime);
  var stopResize = function stopResize(e) {
    setIsResizing(false);
  };
  (0, _react.useEffect)(function () {
    if (isResizing) {
      document.addEventListener("mousemove", throttledResize);
      document.addEventListener("mouseup", stopResize);
      document.addEventListener("touchmove", throttledResize);
      document.addEventListener("touchend", stopResize);
    } else {
      var ht = topHeight || window.innerHeight;
      if (containerHeight >= ht / 3 && containerHeight <= ht * 2 / 3 && isMiddleFunctional) {
        handleMiddle();
      } else if (containerHeight < ht / 3) {
        handleBottom();
      } else {
        handleTop();
      }
      document.removeEventListener("mousemove", throttledResize);
      document.removeEventListener("mouseup", stopResize);
      document.removeEventListener("touchmove", throttledResize);
      document.removeEventListener("touchend", stopResize);
    }
    return function () {
      document.removeEventListener("mousemove", throttledResize);
      document.removeEventListener("mouseup", stopResize);
      document.removeEventListener("touchmove", throttledResize);
      document.removeEventListener("touchend", stopResize);
    };
  }, [isResizing]);
  var handleUp = function handleUp() {
    var ht = middleheight || window.innerHeight;
    if (containerRef.current.offsetHeight > ht / 2 || !isMiddleFunctional) handleTop();else handleMiddle();
  };
  var handleDown = function handleDown() {
    var ht = bottomHeight || window.innerHeight;
    if (containerRef.current.offsetHeight > ht - 25) handleMiddle();else handleBottom();
  };
  (0, _react.useEffect)(function () {
    if (isKeysFunctional) {
      var handleKeyPress = function handleKeyPress(e) {
        switch (e.key) {
          case "ArrowUp":
            handleUp();
            break;
          case "ArrowDown":
            handleDown();
            break;
          default:
            break;
        }
      };
      window.addEventListener("keydown", handleKeyPress);
      return function () {
        return window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [isKeysFunctional]);
  (0, _react.useEffect)(function () {
    if (panelState === "middle") handleMiddle();else if (panelState === "top") handleTop();else handleBottom();
  }, [panelState]);
  return !isVisible ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_BottomPanelModule.default.container, " ").concat(animationClass, " ").concat(panelClass),
    style: _objectSpread({
      height: containerHeight + "px"
    }, panelBodyCSS),
    id: "container",
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _BottomPanelModule.default.bottomSheetController,
    id: "component",
    onMouseDown: startResize,
    onTouchMove: startResize,
    onMouseUp: stopResize
  }, panelDragIcon ? panelDragIcon : /*#__PURE__*/_react.default.createElement("div", {
    className: _BottomPanelModule.default.line
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _BottomPanelModule.default.tags,
    style: {
      display: isNavigationButtons ? "flex" : "none"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _BottomPanelModule.default.button,
    onClick: handleTop,
    style: {
      color: "white",
      backgroundColor: "#213555"
    }
  }, "Top"), isMiddleFunctional && /*#__PURE__*/_react.default.createElement("button", {
    className: _BottomPanelModule.default.button,
    onClick: handleMiddle,
    style: {
      color: "white",
      backgroundColor: "#9A3B3B"
    }
  }, "Middle"), /*#__PURE__*/_react.default.createElement("button", {
    className: _BottomPanelModule.default.button,
    onClick: handleBottom,
    style: {
      color: "white",
      backgroundColor: "#6C3428"
    },
    textColor: "white",
    color: "#6C3428"
  }, "Bottom"))), /*#__PURE__*/_react.default.createElement("div", {
    className: _BottomPanelModule.default.children
  }, props.children)));
}
BottomPanel.propTypes = {
  panelClass: _propTypes.default.string,
  panelBodyCSS: _propTypes.default.object,
  panelDragIcon: _propTypes.default.element,
  topHeight: _propTypes.default.number,
  bottomHeight: _propTypes.default.number,
  middleheight: _propTypes.default.number,
  isVisible: _propTypes.default.bool,
  isKeysFunctional: _propTypes.default.bool,
  isNavigationButtons: _propTypes.default.bool,
  isMiddleFunctional: _propTypes.default.bool,
  throttleTime: _propTypes.default.number,
  panelState: _propTypes.default.oneOf(["bottom", "top", "middle"]),
  getPanelState: _propTypes.default.func
};
var _default = exports.default = BottomPanel;