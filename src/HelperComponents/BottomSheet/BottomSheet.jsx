/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import style from "./BottomSheet.module.css";
import Button from "../Button/Button";

const BottomSheet = ({ screenSnap = "", handleScreenSnap, ...props }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(30);
  const [animationClass, setAnimationClass] = useState("");

  const containerRef = useRef(null);

  const handleTop = () => {
    var ht = window.innerHeight;
    setAnimationClass(style.fullScreenTransition);
    setContainerHeight(ht);
    setTimeout(() => {
      setContainerHeight(ht - 25);
    }, 300);
  };

  const handleMiddle = () => {
    var ht = window.innerHeight;
    setAnimationClass(style.halfScreenTransition);
    setContainerHeight(ht / 2 + 75);
    setTimeout(() => {
      setContainerHeight(ht / 2 + 50);
    }, 300);
  };

  const handleBottom = () => {
    handleScreenSnap("");
    setAnimationClass(style.startScreenTransition);
    setContainerHeight(10);
    setTimeout(() => {
      setContainerHeight(30);
    }, 300);
  };

  const startResize = (e) => {
    setIsResizing(true);
    setStartY(e.clientY);
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

  const throttledResize = throttle((e) => {
    if (isResizing) {
      const deltaY = e.clientY - startY;
      setContainerHeight(startHeight - deltaY * 3);
    }
  }, 30);

  const stopResize = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", throttledResize);
      document.addEventListener("mouseup", stopResize);
    } else {
      var ht = window.innerHeight;
      if (containerHeight >= ht / 3 && containerHeight <= (ht * 2) / 3)
        handleMiddle();
      else if (containerHeight < ht / 3) handleBottom();
      else handleTop();

      document.removeEventListener("mousemove", throttledResize);
      document.removeEventListener("mouseup", stopResize);
    }
    return () => {
      document.removeEventListener("mousemove", throttledResize);
      document.removeEventListener("mouseup", stopResize);
    };
  }, [isResizing]);

  return (
    <>
      <div
        className={`${style.container} ${animationClass}`}
        style={{
          height: containerHeight + "px",
        }}
        onMouseDown={startResize}
        onMouseUp={stopResize}
        ref={containerRef}
      >
        <div className={style.bottomSheetController} onMouseDown={startResize}>
          <div className={style.line}></div>
        </div>
        <div className={style.tags}>
          <Button onClick={handleTop} textColor={"white"} color={"#213555"}>
            Top
          </Button>
          <Button onClick={handleMiddle} textColor={"white"} color={"#9A3B3B"}>
            Middle
          </Button>
          <Button onClick={handleBottom} textColor={"white"} color={"#6C3428"}>
            Bottom
          </Button>
        </div>
        <div className={style.children}>{props.children}</div>
      </div>
    </>
  );
};

export default BottomSheet;
