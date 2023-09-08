import React from "react";
import style from "./BottomSheet.module.css";
import { AiOutlineClose } from "react-icons/ai";

const BottomSheet = ({ screenSnap, isOpen, handleSheetClose }) => {
  return isOpen ? (
    <></>
  ) : (
    <>
      <div className={style.background}></div>
      <div className={style.container}>
        <div className={style.closeBtn} onClick={handleSheetClose}>
          <AiOutlineClose size={24} />
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
