import ServiceCard from "../components/ServiceCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { services } from "../constants";
import ServiceBg from "@/assets/img/services/services-bg.jpg";

const Services = () => {
  return (
    <section id="services" className="pb-28 lg:pb-40 pt-26 md:pt-40 relative">
      <img
        src={ServiceBg}
        alt=""
        className="absolute object-cover top-0 left-0 -z-1 w-full h-[688px]"
      />
      <div className="container">
        <h3 className="heading max-w-120 flex-1">
          Expert Solutions for Real Estate Needs
        </h3>
        <div className="pt-8 md:pt-15 card-swiper">
          <Swiper
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 3,
              },
              1336: {
                slidesPerView: 3,
              },
              1548: {
                slidesPerView: 3,
              },
            }}>
            {services.map((service) => (
              <SwiperSlide key={service.src}>
                <ServiceCard title={service.title} src={service.src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
