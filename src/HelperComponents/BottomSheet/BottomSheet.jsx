/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import style from "./BottomSheet.module.css";

const BottomSheet = ({ screenSnap = "", ...props }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(42);
  const [animationClass, setAnimationClass] = useState("");

  const containerRef = useRef(null);

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
        setContainerHeight(ht / 2 + 50);
      else if (containerHeight < ht / 3) setContainerHeight(42);
      else setContainerHeight(ht - 25);
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
        <div className={style.children}></div>
        {props.children}
      </div>
    </>
  );
};

export default BottomSheet;
