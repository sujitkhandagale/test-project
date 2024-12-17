import React from "react";
import style from "./home_poster.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

function HomePoster() {
  return (
    <div className={style.home_poster}>
      <div className={style.image}>
        <Image
          src={
            "https://tnuck.com/cdn/shop/files/1d_478ce6e5-2f5d-409c-90e7-ef1aa71318f9.png?v=1734450228&width=1500"
          }
          width={1500}
          height={700}
          alt="party"
        />
      </div>
      <div className={style.overlay}>
        <h1>Checking In</h1>
        <p>
          With our latest arrivals for holiday parties, New Year’s celebrations,
          and all the fun.
        </p>
        <Link href={"/product/test-product"}>
          <button>Shop the party</button>
        </Link>
      </div>
      <div className={style.bag}>
        <BsHandbag />
      </div>
    </div>
  );
}

export default HomePoster;
