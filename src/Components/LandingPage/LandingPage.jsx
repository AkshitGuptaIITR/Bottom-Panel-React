import React from 'react';
import style from "./LandingPage.module.css";
import BottomSheet from "../../HelperComponents/BottomSheet/BottomSheet"

const LandingPage = () => {
  

  return (
    <div className={style.container}>
      <BottomSheet screenSnap={""} />
    </div>
  )
}

export default LandingPage