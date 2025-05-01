import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import getCars from "../../getCarsFunc";
import { ICars } from "../../Types/types";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import strLeft from "./Icons/strLeft.svg";
import strRight from "./Icons/strRight.svg";
import strTop from "./Icons/strTop.svg";
import speed from "./Icons/speed.svg";
import box from "./Icons/box.svg";

const Header: FC = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
  return (
    <section className="header">
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
            <button className="header__top-button">Submit Listing</button>
          </div>
          {loading ? (
            <div className="header__loading-wrapper">any</div>
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
                    <button className="header__main-btn">
                      Learn More
                      <span className="header__main-str">
                        <img src={strTop} alt="" />
                      </span>
                    </button>
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
