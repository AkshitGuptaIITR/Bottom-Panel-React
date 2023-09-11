import React, { useState } from "react";
import style from "./LandingPage.module.css";
import BottomSheet from "../../HelperComponents/BottomSheet/BottomSheet";
import Button from "../../HelperComponents/Button/Button";

const LandingPage = () => {
  const [screenSnap, setScreenSnap] = useState("");

  const handleScreenSnap = (value = "") => {
    setScreenSnap(value);
  };

  return (
    <div className={style.container}>
      <div className={style.bottomSheetHandler}>
        <h1>
          <p>Hello,</p> To operate bottom sheet use the bottom line to operate the sheet component!
        </h1>
      </div>
      <BottomSheet screenSnap={screenSnap} handleScreenSnap={handleScreenSnap}>
        <h1 className={style.bottomSheethead}>Hi...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <h2 className={style.bottomSheethead}>Check-2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <h1 className={style.bottomSheethead}>Hi...2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <h2 className={style.bottomSheethead}>Check-3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa
          quisquam non ipsum porro nihil culpa sint laboriosam nostrum
          perspiciatis necessitatibus doloremque nam maxime aut architecto optio
          minima, fuga quaerat.
        </p>
      </BottomSheet>
    </div>
  );
};

export default LandingPage;
