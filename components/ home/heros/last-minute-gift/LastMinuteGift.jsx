import React from "react";
import style from "./last_m.module.scss";

function LastMinuteGift() {
  return (
    <div className={style.last_m}>
      <div className={style.data}>
        <h4>Last-Minute Gifts</h4>
        <p>The best gift (card)? One you can choose.</p>
        <button>Shop Gift Cards</button>
      </div>
      <div className={style.cover}>
        <img
          src="https://tnuck.com/cdn/shop/files/3d_a83976ad-ffc9-4529-b758-4010fb384d98.png?v=1733348929&width=768%20768w,%20//tnuck.com/cdn/shop/files/3d_a83976ad-ffc9-4529-b758-4010fb384d98.png?v=1733348929&width=1500%201500w,%20//tnuck.com/cdn/shop/files/3d_a83976ad-ffc9-4529-b758-4010fb384d98.png?v=1733348929&width=1780%201780w,%20//tnuck.com/cdn/shop/files/3d_a83976ad-ffc9-4529-b758-4010fb384d98.png?v=1733348929&width=2000%202000w,%20//tnuck.com/cdn/shop/files/3d_a83976ad-ffc9-4529-b758-4010fb384d98.png?v=1733348929&width=3000%203000w"
          alt=""
        />
      </div>
    </div>
  );
}

export default LastMinuteGift;
