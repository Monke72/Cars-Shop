import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import strLeft from "./Icons/strLeft.svg";
import strRight from "./Icons/strRight.svg";
import basket from "./Icons/basket.png";
import speed from "./Icons/speed.svg";
import box from "./Icons/box.svg";

import React, { useMemo } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { getHeaderCars } from "../../getCarsFunc";

type NotificationPlacement = NotificationArgsProps["placement"];
const Context = React.createContext({ name: "Default" });

const Header: FC = () => {
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  const [submit, setSubmit] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const headerCars = useSelector((state: RootState) => state.cars.header);
  const status = useSelector((state: RootState) => state.cars.status);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    dispatch(getHeaderCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `You Submit to Listing`,
      description: (
        <Context.Consumer>
          {() => `Now new notifications will appear in the lower right corner.`}
        </Context.Consumer>
      ),
      placement,
    });
    setSubmit(true);
  };
  return (
    <section className="header">
      <Context.Provider value={contextValue}>{contextHolder}</Context.Provider>
      <div className="header__main">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor
          centeredSlides
          loop={false}
          allowTouchMove={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          <div className="header__top">
            <div className="header__top-title">BOXCARS</div>
            <div className="header__top-buttons">
              <Link to={"/basket"}>
                <button className="button__header-basket">
                  <img
                    className="button__header-basket__image"
                    src={basket}
                    alt=""
                  />
                </button>
              </Link>
              <button
                onClick={() => openNotification("topLeft")}
                className="header__top-button"
                disabled={submit}
              >
                Submit Listing
              </button>
            </div>
          </div>

          {status === "loading" ? (
            <div className="header__loading-wrapper"></div>
          ) : (
            headerCars.map((el, i) => (
              <SwiperSlide
                key={i}
                className="header__main-swiper"
                style={{
                  background: `url(${el.urlPhoto})`,
                  width: "100vw",
                }}
              >
                <div className="header__main-info">
                  <div className="header__main-price">
                    $
                    {`${el.price.toString().slice(0, 2)},${el.price
                      .toString()
                      .slice(2)}`}
                  </div>
                  <div className="header__main-name">{el.name}</div>
                  <div className="header__main-function">
                    <div className="header__main-function__speed">
                      <img src={speed} alt="" /> {el.acceleration}s
                    </div>
                    <div className="header__main-function__box">
                      <img src={box} alt="" /> automatic
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}

          <div className="header__swiper-btns">
            <button ref={prevRef} className="header__custom-prev">
              <img src={strLeft} alt="" />
            </button>
            <button ref={nextRef} className="header__custom-next">
              <img src={strRight} alt="" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Header;
