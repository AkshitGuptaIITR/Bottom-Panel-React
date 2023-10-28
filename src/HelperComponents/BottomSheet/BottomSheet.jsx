/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import style from "./BottomSheet.module.css";
import Button from "../Button/Button";

const BottomSheet = ({ screenSnap = "", handleScreenSnap, ...props }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(80);
  const [animationClass, setAnimationClass] = useState("");

  const containerRef = useRef(null);

  const handleTop = () => {
    var ht = window.innerHeight;
    setAnimationClass(style.fullScreenTransition);
    setContainerHeight(ht - 40);
    setTimeout(() => {
      setContainerHeight(ht - 80);
    }, 300);
  };

  const handleMiddle = () => {
    var ht = window.innerHeight;
    setAnimationClass(style.halfScreenTransition);
    setContainerHeight(ht / 2 + 75);
    setTimeout(() => {
      setContainerHeight(ht / 2);
    }, 300);
  };

  const handleBottom = () => {
    handleScreenSnap("");
    setAnimationClass(style.startScreenTransition);
    setContainerHeight(10);
    setTimeout(() => {
      setContainerHeight(80);
    }, 300);
  };

  const startResize = (e) => {
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

  const throttledResize = throttle((e) => {
    if (isResizing) {
      console.log(e.clientY || e?.targetTouches[0]?.screenY);
      const deltaY = (e.clientY || e?.targetTouches[0]?.screenY) - startY;
      setContainerHeight(startHeight - deltaY * 3);
    }
  }, 30);

  const stopResize = (e) => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", throttledResize);
      document.addEventListener("mouseup", stopResize);
      document.addEventListener("touchmove", throttledResize);
      document.addEventListener("touchend", stopResize);
    } else {
      var ht = window.innerHeight;
      if (containerHeight >= ht / 3 && containerHeight <= (ht * 2) / 3)
        handleMiddle();
      else if (containerHeight < ht / 3) handleBottom();
      else handleTop();
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
    var ht = window.innerHeight;
    if (containerRef.current.offsetHeight > ht / 2) handleTop();
    else handleMiddle();
  };

  const handleDown = () => {
    var ht = window.innerHeight;
    if (containerRef.current.offsetHeight > ht - 25) handleMiddle();
    else handleBottom();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
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
    // const scrollableDiv = document.getElementById("component");
    // scrollableDiv.addEventListener("wheel", (e) => {
    //   e.preventDefault();
    // });
    // document.addEventListener("wheel", (e) => {
    //   e.preventDefault();
    // });
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <div
        className={`${style.container} ${animationClass}`}
        style={{
          height: containerHeight + "px",
        }}
        id="container"
        ref={containerRef}
      >
        <div
          className={style.bottomSheetController}
          id="component"
          // onClick={startResize}
          onMouseDown={startResize}
          // onTouchStart={startResize}
          // onTouchEnd={stopResize}
          onTouchMove={startResize}
          onMouseUp={stopResize}
        >
          <div className={style.line}></div>
          <div className={style.tags}>
            <Button onClick={handleTop} textColor={"white"} color={"#213555"}>
              Top
            </Button>
            <Button
              onClick={handleMiddle}
              textColor={"white"}
              color={"#9A3B3B"}
            >
              Middle
            </Button>
            <Button
              onClick={handleBottom}
              textColor={"white"}
              color={"#6C3428"}
            >
              Bottom
            </Button>
          </div>
        </div>
        <div className={style.children}>{props.children}</div>
      </div>
    </>
  );
};

export default BottomSheet;
