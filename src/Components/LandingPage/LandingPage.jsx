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
          <p>Hello,</p> To operate bottom sheet component use these buttons!
        </h1>
        <div className={style.buttons}>
          <Button
            onClick={() => handleScreenSnap("")}
            color={"#213555"}
            textColor={"white"}
          >
            Open
          </Button>
          <Button
            color={"#9A3B3B"}
            textColor={"white"}
            onClick={() => handleScreenSnap("half")}
          >
            Half Screen
          </Button>
          <Button
            onClick={() => handleScreenSnap("full")}
            color={"#6C3428"}
            textColor={"white"}
          >
            Full Screen
          </Button>
        </div>
      </div>
      <BottomSheet screenSnap={screenSnap} />
    </div>
  );
};

export default LandingPage;
