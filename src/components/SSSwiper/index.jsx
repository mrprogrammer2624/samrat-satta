import clsx from "clsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/free-mode";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

export const SSSwiper = ({
  pagination,
  navigation,
  className,
  children,
  spaceBetween,
  slidesPerView,
  autoplay,
  centeredSlides,
  direction,
  loop,
  breakpoints,
  grabCursor,
  freeMode,
  ...rest
}) => {
  return (
    <Swiper
      pagination={pagination}
      navigation={navigation}
      spaceBetween={spaceBetween}
      className={clsx(className, "mySwiper")}
      slidesPerView={slidesPerView}
      autoplay={autoplay}
      centeredSlides={centeredSlides}
      grabCursor={grabCursor}
      breakpoints={breakpoints}
      direction={direction}
      loop={loop}
      freeMode={freeMode}
      modules={[FreeMode, Autoplay, Pagination, Navigation]}
      {...rest}
    >
      {children}
    </Swiper>
  );
};
