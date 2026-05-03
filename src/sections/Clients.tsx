// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { clients } from "../constants";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import useMediaQuery from "../hooks/useMediaQuery";

const Clients = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section className="pt-28 md:pt-40 pb-28 md:pb-32">
      {isDesktop ? (
        <Swiper
          className="ease-linear! partners-swiper"
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          spaceBetween={120}
          autoplay={{
            delay: 0,

            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1336: {
              slidesPerView: 5,
            },
            1548: {
              slidesPerView: 7,
            },
          }}>
          {clients.map((img) => (
            <SwiperSlide key={img}>
              <img className="max-w-42.25" src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center flex-wrap justify-center">
          {clients.slice(0, 4).map((img) => (
            <div className="px-3 py-[20px] md:p-[30px]" key={img}>
              <img
                className="w-auto md:w-full object-cover"
                src={img}
                alt={img}
                width={200}
                height={35}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Clients;
