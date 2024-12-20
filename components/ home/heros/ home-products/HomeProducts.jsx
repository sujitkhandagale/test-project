import React from "react";
import style from "./home_products.module.scss";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {CiHeart} from "react-icons/ci";

function HomeProducts() {
  return (
    <div className={style.home_products}>
      <div className={style.des}>
        <div className={style.con}>
          <span>Just In</span>
          <h3>Hello, New</h3>
          <p>
            The latest finds from our favorite designers, plus Tuckernuck
            exclusives we made just for you.
          </p>
          <button>Shop New Arrivals</button>
          <div className={style.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="108"
              viewBox="0 0 112 108"
              className="hidden top-1/2 -translate-y-1/2 lg:block absolute left-[calc(100%-30px)]"
              fill="none"
            >
              <g clipPath="url(#clip0_2453_13714)">
                <path
                  fill="#837367"
                  d="M.433 56.605C5.493 48.199 15.81 44.207 27.1 43.934c6.153-.148 12.582.681 18.976 1.977 3.791.769 11.537 1.503 13.422 5.984 1.61 3.823-2.548 7.22-5.837 7.797-3.853.678-9.045-1.667-10.798-5.72-1.756-4.061.358-7.671 3.643-9.237 4.507-2.153 10.96-1.899 16.475-1.719 14.432.47 29.326 3.787 44.066 7.1 1.136.255 2.097 1.637 1.443 2.413-2.216 2.625-5.005 4.48-8.427 5.807-.509-.871-1.027-1.742-1.537-2.614 2.568-.601 6.225-1.52 7.702-3.483 1.248-1.655-.367-2.38-2.117-3.582-1.543-1.06-3.095-2.12-4.638-3.18-1.851-1.267-.303-3.438 1.538-2.145 2.545 1.785 5.566 3.505 7.867 5.568 1.197 1.064 1.845 2.108 1.582 3.37-.351 1.68-2.512 2.793-3.915 3.61-1.953 1.13-4.131 1.924-6.482 2.456-1.694.389-3.117-2.016-1.537-2.614 2.988-1.139 5.302-2.882 7.183-5.187.48.803.959 1.606 1.444 2.413-11.644-2.69-23.343-5.388-34.898-6.67-6.125-.678-12.287-.996-18.143-.589-3.13.22-6.59.72-8.336 2.97-1.814 2.334-1.327 6.178 2.48 8.115 3.601 1.83 6.948.362 8.388-2.113 2.421-4.148-5.359-5.3-8.26-5.962-6.017-1.38-12.054-2.387-17.93-2.566-11.909-.358-23.043 2.848-28.596 11.5-.467.724-1.865-.292-1.428-1.024l.003-.004z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2453_13714">
                  <path
                    fill="#fff"
                    d="M0 0H87.183V70.245H0z"
                    transform="scale(-1 1) rotate(-35.642 23.125 199.266)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={style.products}>
        <Splide
          options={{
            perPage: 4,
            loop: false,
            gap: 10,
            padding: 10,
            arrows: true,
            pagination: false,
            animation: true,
            breakpoints: {
              1200: {
                perPage: 3,
              },
              1024: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {products.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div className={style.product}>
                  <div className={style.overlay}>
                    <CiHeart fontSize={24} />
                  </div>
                  <div className={style.image}>
                    <Image
                      src={item.image}
                      alt={"product"}
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div className={style.details}>
                    <div className={style.sizes}>
                      <Splide
                        options={{
                          perPage:
                            item.sizes?.length > 4 ? 4 : item?.sizes?.length,
                          loop: false,
                          gap: 5,
                          arrows: true,
                          focus: "center",
                          pagination: false,
                          animation: true,
                        }}
                      >
                        {item.sizes.map((size, index) => {
                          return (
                            <SplideSlide
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              key={index}
                            >
                              <span>{size}</span>
                            </SplideSlide>
                          );
                        })}
                      </Splide>
                    </div>
                    <div className={style.name}>
                      <h3>{item.name}</h3>
                      <p>{item.details}</p>
                      <span>{item.price}</span>
                    </div>
                    <div className={style.variants}>
                      {item.variants.map((variant) => {
                        return (
                          <input
                            style={{
                              accentColor: variant,
                            }}
                            type="radio"
                            checked={true}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default HomeProducts;

const products = [
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/ebs5fqoCGXLlQedMTU3QoIKkr3fd2Ljo-1_640x.jpg?v=1734457498",
    details: "Black Floral Applique Helena Dress",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    price: "$ 79.00",
    images: [""],
    variants: ["red", "blue"],
  },
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/Xao6afpdoVP74wgidXxzyGUbqywmr3Fe-1_640x.jpg?v=1734636420",
    details: "Black Floral Applique Helena Dress",
    sizes: ["XS"],
    price: "$ 79.00",
    images: [""],
    variants: ["black"],
  },
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/loGZxWwOFlJZZJBNlL1VRpdVkHYgEkOg-1_640x.jpg?v=1734635220",
    details: "Black Floral Applique Helena Dress",
    sizes: ["XL", "XXL"],
    price: "$ 79.00",
    images: [""],
    variants: ["red"],
  },
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/9cQuDzqAR64osQh3AUu6N5siJpfqSOe3-1_640x.jpg?v=1734532230",
    details: "Black Floral Applique Helena Dress",
    price: "$ 79.00",
    sizes: ["XL", "XXL"],
    images: [""],
    variants: ["pink"],
  },
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/KwTZA964m8DOWlheB5txFyuNHsKwihO7-1_640x.jpg?v=1734465194",
    details: "Black Floral Applique Helena Dress",
    sizes: ["XL", "XXL"],
    price: "$ 79.00",
    images: [""],
    variants: [],
  },
  {
    name: "TuckerNuck",
    image:
      "https://tnuck.com/cdn/shop/files/ebs5fqoCGXLlQedMTU3QoIKkr3fd2Ljo-1_640x.jpg?v=1734457498",
    details: "Black Floral Applique Helena Dress",
    sizes: ["XL", "XXL"],
    price: "$ 79.00",
    images: [""],
    variants: [],
  },
];
