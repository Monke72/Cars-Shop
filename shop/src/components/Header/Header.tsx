import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import getCars from "../../getCarsFunc";
import { ICars } from "../../Types/types";
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
type NotificationPlacement = NotificationArgsProps["placement"];
const Context = React.createContext({ name: "Default" });

const Header: FC = () => {
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  const [cars, setCars] = useState<ICars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [submit, setSubmit] = useState<boolean>(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const headerLimit: string = "?page=1&limit=3";

  useEffect(() => {
    async function stayImage() {
      setLoading(true);
      await getCars(headerLimit, setCars);
      setLoading(false);
    }
    stayImage();
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
          spaceBetween={0} // Пространство между слайдами
          slidesPerView={1} // Показывать 4 слайда
          grabCursor={true} // Курсор захвата
          centeredSlides={true} // Центрировать слайды
          loop={false} // Включить бесконечный цикл
          allowTouchMove={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          <div className="header__top">
            <div className="header__top-title">BOXCARS</div>
            <div className="header__top-buttons">
              <button className="button__header-basket">
                <img
                  className="button__header-basket__image"
                  src={basket}
                  alt=""
                />
              </button>
              <button
                onClick={() => openNotification("topLeft")}
                className="header__top-button"
                disabled={submit}
              >
                Submit Listing
              </button>
            </div>
          </div>
          {loading ? (
            <div className="header__loading-wrapper"></div>
          ) : (
            <>
              {cars.map((el, i) => (
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
              ))}
            </>
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
