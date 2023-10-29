/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import style from "./BottomSheet.module.css";
import Button from "../Button/Button";
const BottomSheet = function ({
  panelClass = "",
  panelBodyCSS = {},
  panelDragIcon = null,
  topHeight = null,
  bottomHeight = null,
  middleheight = null,
  isVisible = true,
  isKeysFunctional = true,
  isNavigationButtons = true,
  isMiddleFunctional = true,
  throttleTime = 5,
  panelState = "bottom",
  getPanelState = () => {},
  ...props
}) {
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(80);
  const [animationClass, setAnimationClass] = useState("");
  const containerRef = useRef(null);
  const handleTop = () => {
    getPanelState("top");
    var ht = topHeight || window.innerHeight;
    setAnimationClass(style.fullScreenTransition);
    setContainerHeight(ht - 40);
    setTimeout(() => {
      setContainerHeight(ht - 80);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  const handleMiddle = () => {
    getPanelState("middle");
    var ht = middleheight || window.innerHeight;
    setAnimationClass(style.halfScreenTransition);
    setContainerHeight(ht / 2 + 50);
    setTimeout(() => {
      setContainerHeight(ht / 2 + 50);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  const handleBottom = () => {
    getPanelState("bottom");
    setAnimationClass(style.startScreenTransition);
    setContainerHeight(10);
    setTimeout(() => {
      setContainerHeight(bottomHeight || 80);
    }, window.innerWidth >= 758 ? 300 : 150);
  };
  const startResize = e => {
    setIsResizing(true);
    setStartY(e.clientY || e.targetTouches[0].screenY);
    setStartHeight(containerHeight);
  };
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return function () {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        callback.apply(this, arguments);
      }
    };
  };
  const throttledResize = throttle(e => {
    if (isResizing) {
      const deltaY = (e.clientY || e?.targetTouches[0]?.screenY) - startY;
      setContainerHeight(startHeight - deltaY * 3);
    }
  }, throttleTime);
  const stopResize = e => {
    setIsResizing(false);
  };
  useEffect(() => {
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
    return () => {
      document.removeEventListener("mousemove", throttledResize);
      document.removeEventListener("mouseup", stopResize);
      document.removeEventListener("touchmove", throttledResize);
      document.removeEventListener("touchend", stopResize);
    };
  }, [isResizing]);
  const handleUp = () => {
    var ht = middleheight || window.innerHeight;
    if (containerRef.current.offsetHeight > ht / 2 || !isMiddleFunctional) handleTop();else handleMiddle();
  };
  const handleDown = () => {
    var ht = bottomHeight || window.innerHeight;
    if (containerRef.current.offsetHeight > ht - 25) handleMiddle();else handleBottom();
  };
  useEffect(() => {
    if (isKeysFunctional) {
      const handleKeyPress = e => {
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
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [isKeysFunctional]);
  useEffect(() => {
    if (panelState === "middle") handleMiddle();else if (panelState === "top") handleTop();else handleBottom();
  }, [panelState]);
  return !isVisible ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${style.container} ${animationClass} ${panelClass}`,
    style: {
      height: containerHeight + "px",
      ...panelBodyCSS
    },
    id: "container",
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: style.bottomSheetController,
    id: "component",
    onMouseDown: startResize,
    onTouchMove: startResize,
    onMouseUp: stopResize
  }, panelDragIcon ? panelDragIcon : /*#__PURE__*/React.createElement("div", {
    className: style.line
  }), /*#__PURE__*/React.createElement("div", {
    className: style.tags,
    style: {
      display: isNavigationButtons ? "flex" : "none"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleTop,
    textColor: "white",
    color: "#213555"
  }, "Top"), isMiddleFunctional && /*#__PURE__*/React.createElement(Button, {
    onClick: handleMiddle,
    textColor: "white",
    color: "#9A3B3B"
  }, "Middle"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleBottom,
    textColor: "white",
    color: "#6C3428"
  }, "Bottom"))), /*#__PURE__*/React.createElement("div", {
    className: style.children
  }, props.children)));
};
export default BottomSheet;