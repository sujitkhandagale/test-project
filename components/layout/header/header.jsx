import React, { Fragment, useEffect, useRef, useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Cart from "@/components/cart/Cart";

function Header() {
  const [selected, setSelected] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef(null);
  // outside click close

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (sidebar) {
      // hide html scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebar]);

  return (
    <navbar className={style.navbar}>
      {/* notifications */}
      <Notification />
      {/* navbar options */}
      <div className={style.h_options}>
        <div className={style.navigation}>
          <Link href="/">sign in</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">about us</Link>
          <div onClick={() => setSidebar(true)} className={style.icon}>
            <svg
              width="34"
              height="19"
              viewBox="0 0 34 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Translation missing: en.accessibility.hamburger"
            >
              <path
                d="M24.1817 15.7273C27.7966 15.7273 30.7271 12.7968 30.7271 9.1818C30.7271 5.56685 27.7966 2.63635 24.1817 2.63635C20.5667 2.63635 17.6362 5.56685 17.6362 9.1818C17.6362 12.7968 20.5667 15.7273 24.1817 15.7273Z"
                stroke="#2D2926"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32.3633 17.3637L28.8042 13.8046"
                stroke="#2D2926"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path d="M18 1H1" stroke="#2D2926" strokeLinecap="round"></path>
              <path
                d="M13.5 9.20001L1 9.20001"
                stroke="#2D2926"
                strokeLinecap="round"
              ></path>
              <path
                d="M18 17.4L1 17.4"
                stroke="#2D2926"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div
            ref={ref}
            className={`${style.sidebar} ${sidebar === true ? style.show : ""}`}
          >
            <div className={style.m_logo}>
              <div className={style.m_l_image}>
                <svg
                  className="w-full h-full"
                  width="150"
                  height="24"
                  viewBox="0 0 269 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M74.5487 19.4445L74.5 19.4961C72.5745 21.4703 69.9813 23.4904 65.3508 23.4904C62.196 23.4904 59.2934 22.2841 57.173 20.0949C55.0727 17.9287 53.9151 14.9831 53.9151 11.8083V11.7452C53.9151 8.58469 55.0698 5.64194 57.1644 3.45852C59.3077 1.22925 62.2591 0 65.474 0C69.9068 0 72.3567 1.71064 74.3424 3.55881L74.394 3.60465L72.3424 5.91702L72.2879 5.86831C70.073 3.79664 67.9641 2.87398 65.4454 2.87398C63.1645 2.87398 61.0642 3.78231 59.5284 5.4299C58.004 7.06317 57.1644 9.28385 57.1644 11.6822V11.7452C57.1644 16.7195 60.8006 20.6164 65.4454 20.6164C68.5171 20.6164 70.4655 19.3585 72.4427 17.4674L72.4942 17.4215L74.5487 19.4445ZM18.0892 3.278V0.3725H0V3.278H7.48439V23.1179H10.6077V3.278H18.0892ZM45.2043 13.3584V0.3725H42.0782V13.5447C42.0782 18.0175 39.8088 20.5849 35.6912 20.5849C31.5737 20.5849 29.2126 17.9631 29.2126 13.3899V0.3725H26.0578V13.5447C26.0578 19.754 29.6367 23.4589 35.6311 23.4589C38.5194 23.4589 40.9206 22.5764 42.5739 20.903C44.3189 19.1408 45.2043 16.602 45.2043 13.3584ZM98.6695 23.1179H102.546L92.466 10.2609L102.165 0.3725H98.148L85.953 13.1177V0.3725H82.8297V23.1179H85.953V16.8657L90.3169 12.4444L98.6495 23.0921L98.6695 23.1179ZM126.851 20.2755V23.1179H110.097V0.3725H126.696V3.21496H113.22V10.2466H125.237V13.0891H113.22V20.2755H126.851ZM179.946 23.1179H182.505V0.3725H179.41V17.5906L165.94 0.398289L165.92 0.3725H163.049V23.1179H166.112V5.46429L179.923 23.0921L179.946 23.1179ZM211.325 0.3725V13.3584C211.325 16.602 210.44 19.1408 208.697 20.903C207.044 22.5764 204.643 23.4589 201.752 23.4589C195.76 23.4589 192.181 19.754 192.181 13.5447V0.3725H195.336V13.3899C195.336 17.9631 197.697 20.5849 201.815 20.5849C205.932 20.5849 208.202 18.0175 208.202 13.5447V0.3725H211.325ZM240.624 19.4961L240.672 19.4445L238.615 17.4215L238.566 17.4674C236.589 19.3585 234.641 20.6164 231.566 20.6164C226.924 20.6164 223.285 16.7195 223.285 11.7452V11.6822C223.285 9.28385 224.125 7.06317 225.649 5.4299C227.185 3.78231 229.285 2.87398 231.566 2.87398C234.085 2.87398 236.197 3.79664 238.411 5.86831L238.463 5.91702L240.515 3.60465L240.463 3.55881C238.477 1.71064 236.03 0 231.598 0C228.38 0 225.428 1.22925 223.288 3.45852C221.193 5.64194 220.039 8.58469 220.039 11.7452V11.8083C220.039 14.9831 221.196 17.9287 223.297 20.0949C225.414 22.2841 228.32 23.4904 231.474 23.4904C236.105 23.4904 238.698 21.4703 240.624 19.4961ZM268.67 23.1179H264.793L264.77 23.0921L256.438 12.4444L252.077 16.8657V23.1179H248.953V0.3725H252.077V13.1177L264.269 0.3725H268.289L258.59 10.2609L268.67 23.1179ZM153.894 7.33539C153.894 10.8054 151.765 13.2495 148.049 14.0576L154.742 23.1179H150.963L150.94 23.0893L144.722 14.6106H138.805V23.1179H135.682V0.3725H145.564C148.318 0.3725 150.63 1.1834 152.075 2.65908C153.232 3.78517 153.894 5.46715 153.894 7.27521V7.33539ZM138.805 3.24648V11.7968H145.347C148.625 11.7968 150.739 10.1062 150.739 7.49012V7.42994C150.739 4.81098 148.725 3.24648 145.347 3.24648H138.805Z"
                    fill="#2D2926"
                  ></path>
                </svg>
              </div>
              <div onClick={() => setSidebar(false)} className={style.m_close}>
                <svg
                  className=""
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Close"
                >
                  <path
                    d="M19.582 2.00012L1.87213 20"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M19.8719 19.9999L2.16205 1.99997"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className={style.search}>
              <FiSearch fontSize={18} />
              <input
                type="text"
                placeholder="Find product, designer, content.."
              />
            </div>
            <div className={style.m_dropdown}>
              {DropDowns.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className={style.dropdown}>
                      <div className={style.m_d_link}>
                        <Link
                          className={`${item.special ? style.special : ""}`}
                          href={"/"}
                        >
                          {item.title}
                        </Link>
                      </div>
                      <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Arrow pointing right"
                        className=""
                      >
                        <path
                          d="M8 17.3784L14 11.3784L8 5.37842"
                          stroke="#2D2926"
                          strokeMiterlimit="16"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={style.logo}>
          <svg
            className="w-full h-full"
            width="269"
            height="24"
            viewBox="0 0 269 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.5487 19.4445L74.5 19.4961C72.5745 21.4703 69.9813 23.4904 65.3508 23.4904C62.196 23.4904 59.2934 22.2841 57.173 20.0949C55.0727 17.9287 53.9151 14.9831 53.9151 11.8083V11.7452C53.9151 8.58469 55.0698 5.64194 57.1644 3.45852C59.3077 1.22925 62.2591 0 65.474 0C69.9068 0 72.3567 1.71064 74.3424 3.55881L74.394 3.60465L72.3424 5.91702L72.2879 5.86831C70.073 3.79664 67.9641 2.87398 65.4454 2.87398C63.1645 2.87398 61.0642 3.78231 59.5284 5.4299C58.004 7.06317 57.1644 9.28385 57.1644 11.6822V11.7452C57.1644 16.7195 60.8006 20.6164 65.4454 20.6164C68.5171 20.6164 70.4655 19.3585 72.4427 17.4674L72.4942 17.4215L74.5487 19.4445ZM18.0892 3.278V0.3725H0V3.278H7.48439V23.1179H10.6077V3.278H18.0892ZM45.2043 13.3584V0.3725H42.0782V13.5447C42.0782 18.0175 39.8088 20.5849 35.6912 20.5849C31.5737 20.5849 29.2126 17.9631 29.2126 13.3899V0.3725H26.0578V13.5447C26.0578 19.754 29.6367 23.4589 35.6311 23.4589C38.5194 23.4589 40.9206 22.5764 42.5739 20.903C44.3189 19.1408 45.2043 16.602 45.2043 13.3584ZM98.6695 23.1179H102.546L92.466 10.2609L102.165 0.3725H98.148L85.953 13.1177V0.3725H82.8297V23.1179H85.953V16.8657L90.3169 12.4444L98.6495 23.0921L98.6695 23.1179ZM126.851 20.2755V23.1179H110.097V0.3725H126.696V3.21496H113.22V10.2466H125.237V13.0891H113.22V20.2755H126.851ZM179.946 23.1179H182.505V0.3725H179.41V17.5906L165.94 0.398289L165.92 0.3725H163.049V23.1179H166.112V5.46429L179.923 23.0921L179.946 23.1179ZM211.325 0.3725V13.3584C211.325 16.602 210.44 19.1408 208.697 20.903C207.044 22.5764 204.643 23.4589 201.752 23.4589C195.76 23.4589 192.181 19.754 192.181 13.5447V0.3725H195.336V13.3899C195.336 17.9631 197.697 20.5849 201.815 20.5849C205.932 20.5849 208.202 18.0175 208.202 13.5447V0.3725H211.325ZM240.624 19.4961L240.672 19.4445L238.615 17.4215L238.566 17.4674C236.589 19.3585 234.641 20.6164 231.566 20.6164C226.924 20.6164 223.285 16.7195 223.285 11.7452V11.6822C223.285 9.28385 224.125 7.06317 225.649 5.4299C227.185 3.78231 229.285 2.87398 231.566 2.87398C234.085 2.87398 236.197 3.79664 238.411 5.86831L238.463 5.91702L240.515 3.60465L240.463 3.55881C238.477 1.71064 236.03 0 231.598 0C228.38 0 225.428 1.22925 223.288 3.45852C221.193 5.64194 220.039 8.58469 220.039 11.7452V11.8083C220.039 14.9831 221.196 17.9287 223.297 20.0949C225.414 22.2841 228.32 23.4904 231.474 23.4904C236.105 23.4904 238.698 21.4703 240.624 19.4961ZM268.67 23.1179H264.793L264.77 23.0921L256.438 12.4444L252.077 16.8657V23.1179H248.953V0.3725H252.077V13.1177L264.269 0.3725H268.289L258.59 10.2609L268.67 23.1179ZM153.894 7.33539C153.894 10.8054 151.765 13.2495 148.049 14.0576L154.742 23.1179H150.963L150.94 23.0893L144.722 14.6106H138.805V23.1179H135.682V0.3725H145.564C148.318 0.3725 150.63 1.1834 152.075 2.65908C153.232 3.78517 153.894 5.46715 153.894 7.27521V7.33539ZM138.805 3.24648V11.7968H145.347C148.625 11.7968 150.739 10.1062 150.739 7.49012V7.42994C150.739 4.81098 148.725 3.24648 145.347 3.24648H138.805Z"
              fill="#2D2926"
            ></path>
          </svg>
        </div>
        <div className={style.right_side}>
          <div className={style.item}>
            <div className={style.search}>
              <FiSearch fontSize={18} />
              <input
                type="text"
                placeholder="Find product, designer, content.."
              />
            </div>
          </div>
          <Flags />
          <CardMenu />
        </div>
      </div>
      {/* navbar dropdown */}
      <div className={style.dropdowns}>
        {DropDowns.map((item, index) => {
          return (
            <div
              key={index}
              onMouseMove={() => {
                setSelected(item);
              }}
              className={`${style.option} ${item.special === true ? style.special : ""}`}
            >
              {item.title}
              <div className={style.number}>
                <span>{item.count}</span>
              </div>
            </div>
          );
        })}
      </div>
      {selected && (
        <div
          onMouseLeave={() => {
            setSelected(null);
          }}
          className={style.d_options}
        >
          <div className={"container"}>
            <div className={style.categories}>
              {selected?.subCategory?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className={style.list}>
                      <h3>{item.title}</h3>
                      {item?.category.map((sub_item, sub_index) => {
                        return (
                          <div className={style.sub_item}>
                            <Link href={`/products/${sub_item.link}`}>
                              {sub_item.title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
              <div className={style.image_category}>
                {selected?.attachedCategory?.map((image, imageIndex) => {
                  return (
                    <div key={imageIndex} className={style.box}>
                      <div className={style.image}>
                        <Image
                          src={image?.image}
                          width={200}
                          height={200}
                          alt="category"
                        />
                      </div>
                      <h4>{image?.title}</h4>
                      <Link href={"/"}>
                        Shop Now <MdOutlineKeyboardArrowRight />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </navbar>
  );
}

export default Header;
const Notification = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div className={style.notifications}>
        <Splide
          options={{
            perPage: 1,
            loop: true,
            gap: 20,
            arrows: false,
            pagination: false,
            animation: true,
          }}
        >
          <SplideSlide>
            <span className={style.point}>
              Order with expedited shipping by 2pm EST on 12/20 for delivery by
              12/24 in the US. <a href="#">Click Here</a>
            </span>
          </SplideSlide>
          <SplideSlide>
            <span className={style.point}>
              Order with expedited shipping by 2pm EST on 12/20 for delivery by
              12/24 in the US.
            </span>
          </SplideSlide>
        </Splide>
        <div onClick={() => setShow(false)} className={style.close}>
          <HiOutlineXMark fontSize={24} />
        </div>
      </div>
    );
  } else return null;
};
const CardMenu = () => {
  return (
    <Fragment>
      <div className={style.item}>
        <Cart
          button={
            <div className={style.cart}>
              <svg
                className=""
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Bag"
              >
                <path
                  d="M17 8L13.8403 2.10185C13.4768 1.42344 12.7696 1 12 1V1C11.2304 1 10.5232 1.42344 10.1597 2.10185L7 8"
                  stroke="#2D2926"
                ></path>
                <path
                  d="M0.668604 11.1552C0.597369 11.0017 0.628395 10.8869 0.681697 10.8259C1.44137 9.95607 4.25953 7.5 12 7.5C19.7405 7.5 22.5586 9.95607 23.3183 10.8259C23.3716 10.8869 23.4026 11.0017 23.3314 11.1552L17.2698 24.2106C17.1879 24.3871 17.0109 24.5 16.8163 24.5H7.18369C6.98907 24.5 6.81214 24.3871 6.73019 24.2106L0.668604 11.1552Z"
                  stroke="#2D2926"
                ></path>
              </svg>
              <div className={style.count}>0</div>
            </div>
          }
        />
      </div>
    </Fragment>
  );
};
const Flags = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className={style.item}>
        <div className={style.flag}>
          <Image
            onClick={() => setShow(!show)}
            src={"https://cdn.shopify.com/static/images/flags/us.svg?width=26"}
            width={26}
            height={26}
            alt="flag"
          />
          {show && (
            <div className={style.flag_container}>
              <div className={style.close_btn} onClick={() => setShow(false)}>
                <span>
                  <HiOutlineXMark />
                </span>
              </div>
              <div className={style.f_title}>
                <p>Ship to: </p> United States
              </div>
              <div className={style.radios}>
                <div className={style.radio}>
                  <input type="radio" id="us" name="country" value="us" />
                  <label htmlFor="us">United States</label>
                </div>
                <div className={style.radio}>
                  <input type="radio" id="uk" name="country" value="uk" />
                  <label htmlFor="uk">United Kingdom</label>
                </div>
                <div className={style.radio}>
                  <input type="radio" id="au" name="country" value="au" />
                  <label htmlFor="au">Australia</label>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={style.user}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[25px]"
            aria-label="Account"
          >
            <path
              d="M14.5625 4.58264C14.5625 6.8263 12.7437 8.64514 10.5 8.64514C8.25634 8.64514 6.4375 6.8263 6.4375 4.58264C6.4375 2.33898 8.25634 0.520142 10.5 0.520142C12.7437 0.520142 14.5625 2.33898 14.5625 4.58264Z"
              stroke="#2D2926"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10.5 12.0826C6.75 12.0826 3 14.8735 3 19.2826C3 19.2826 5.67857 21.0826 10.5 21.0826C15.3214 21.0826 18 19.2826 18 19.2826C18 14.8735 14.25 12.0826 10.5 12.0826Z"
              stroke="#2D2926"
              strokeWidth="0.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

const DropDowns = [
  {
    title: "New",
    count: 234,
    subCategory: [
      {
        title: "Gifts for all",
        category: [
          {
            title: "For Her",
            link: "#",
          },
          {
            title: "For Him",
            link: "#",
          },
          {
            title: "For Them",
            link: "#",
          },
          {
            title: "Birthdays",
            link: "#",
          },
        ],
      },
      {
        title: "Holiday Shops",
        category: [
          {
            title: "Christmas",
            link: "#",
          },
          {
            title: "Thanksgiving",
            link: "#",
          },
          {
            title: "Valentine's Day",
            link: "#",
          },
          {
            title: "Easter",
            link: "#",
          },
        ],
      },
    ],
    attachedCategory: [
      {
        title: "New Arrivals",
        image:
            "https://tnuck.com/cdn/shop/files/portrait_copy_d5e191fa-7af8-40ee-a358-c2790e7a7529.png?v=1734475464&width=1536",
        link: "#",
      },
    ],
  },
  {
    title: "Holiday and gifts",
    special: true,
    subCategory: [
      {
        title: "Gifts for all",
        category: [
          {
            title: "For Her",
            link: "#",
          },
          {
            title: "For Him",
            link: "#",
          },
          {
            title: "For Them",
            link: "#",
          },
          {
            title: "Birthdays",
            link: "#",
          },
        ],
      },
      {
        title: "Holiday Shops",
        category: [
          {
            title: "Christmas",
            link: "#",
          },
          {
            title: "Thanksgiving",
            link: "#",
          },
          {
            title: "Valentine's Day",
            link: "#",
          },
          {
            title: "Easter",
            link: "#",
          },
        ],
      },
    ],
    attachedCategory: [
      {
        title: "Gift Card",
        image:
          "https://tnuck.com/cdn/shop/files/THUMBNAIL_18.png?v=1734542897&width=1536",
        link: "#",
      },
      {
        title: "Holiday Home",
        image:
          "https://tnuck.com/cdn/shop/files/241003_TUCKERNUCK_TERENCECONNORS_STILLLIFE_139.jpg?v=1729901710&width=1536",
        link: "#",
      },
      {
        title: "Gift for Her",
        image:
          "https://tnuck.com/cdn/shop/files/B3_10.24.24_000404_10_24_Bay_03_Additional_Gift_Guides_1.jpg?v=1729901676&width=1536",
        link: "#",
      },
    ],
  },
  {
    title: "The party shop",
  },
  {
    title: "Clothing",
  },
  {
    title: "Shoes",
  },
  {
    title: "Accessories",
  },
  {
    title: "Sport",
  },
  {
    title: "Designers",
  },
  {
    title: "OUR labels",
  },
];
