import React, { useState } from "react";
import style from "./LandingPage.module.css";
import BottomPanel from "../../HelperComponent/BottomPanel/BottomPanel";

const LandingPage = () => {
  const [screenSnap, setScreenSnap] = useState("");

  const handleScreenSnap = (value = "") => {
    setScreenSnap(value);
  };

  return (
    <div className={style.container}>
      <div className={style.bottomSheetHandler}>
        <h1>
          <p>Hello,</p> To operate Bottom Panel:
          <ul style={{ color: "black", fontSize: 20, textAlign: "left" }}>
            <li> You can drag it up and down.</li>
            <li> Use Navigation Buttoms at the bottom.</li>
            <li> Use Keyboard key Up ⬆️ and Down ⬇️.</li>
          </ul>
          <p style={{ fontSize: 18 }}>Developed by: Akshit Gupta</p>
        </h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            style={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={() => { window.open("https://github.com/AkshitGuptaIITR") }}
          />
          <a href="mailto:gakshit92@gmail.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"
              alt=""
              style={{ width: 40, height: 40, cursor: "pointer" }}
            />
          </a>
          <img
            src="https://t4.ftcdn.net/jpg/02/51/67/07/360_F_251670796_uldt5Z4Od04dCE4hYAsUxbbwNnl0Own9.jpg"
            alt=""
            style={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/18C2s3_rPs46H5YMPA9Q7MmdcZaU2rtI6/view?usp=drive_link"
              );
            }}
          />
        </div>
      </div>
      <BottomPanel panelState={screenSnap} getPanelState={handleScreenSnap}>
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
      </BottomPanel>
    </div>
  );
};

export default LandingPage;
