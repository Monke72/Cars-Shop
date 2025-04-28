import { FC } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import getCars from "./../getCarsFunc";
import { ICars } from "./../getCarsFunc";

const Header: FC = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const headerLimit: string = "?page=1&limit=5";
  console.log(headerLimit);

  useEffect(() => {
    getCars(headerLimit, setCars);
  }, []);
  return (
    <section className="header">
      <div className="header__top">
        <div className="header__top-title">BOXCARS</div>
        <div className="header__top-button">Submit Listing</div>
      </div>
      <div className="header__main">
        <Swiper
          spaceBetween={0} // Пространство между слайдами
          slidesPerView={1} // Показывать 4 слайда
          grabCursor={true} // Курсор захвата
          centeredSlides={true} // Центрировать слайды
          loop={false} // Включить бесконечный цикл
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {cars.map((el) => (
            <SwiperSlide
              className="header__main-swiper"
              style={{
                background: `url(${el.urlPhoto})`,
                width: "100vw",
              }}
            >
              dsodl
            </SwiperSlide>
          ))}
          ...
        </Swiper>
        <button
          ref={prevButtonRef}
          className="swiper-button-prev"
          style={{ zIndex: 1000 }}
        >
          Назад
        </button>
        <button ref={nextButtonRef} className="swiper-button-next">
          Вперед
        </button>
      </div>
    </section>
  );
};

export default Header;
