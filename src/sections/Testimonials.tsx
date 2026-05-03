import { avatars } from "../constants";
import ClientImage from "@/assets/img/client.jpg";
import QuoteIcon from "@/assets/img/icons/quote.svg";
import { AnimatePresence, motion } from "motion/react";

import { useRef, useState } from "react";
import Chevron from "../components/icons/Chevron";

const Testimonials = () => {
  const testimonials = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [value, setValue] = useState(0);
  const constraintsRef = useRef(null);
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  // <div className="rounded-lg cursor-pointer bg-secondary w-8 h-1.5"></div>

  return (
    <section className="pt-10 md:pt-17 pb-20">
      <div className="container">
        <div className="grid grid-flow-row gap-4 md:grid-flow-col items-center justify-between">
          <h3 className="heading">What Our Client Say</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex -space-x-4 overflow-hidden">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-12 h-12 inline-block size-12 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5"
                />
              ))}
            </div>
            <div className="font-medium text-lg md:text-xl text-secondary-foreground">
              Trusted by 100k Users arround the wordl
            </div>
          </div>
        </div>
        <div className="pt-15.5">
          {/* slider for motion framer */}
          <div className="relative" ref={constraintsRef}>
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout">
              <motion.div
                className="w-full"
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                onPan={(event, info) => {
                  console.log("swipe");
                }}
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.2 },
                }}>
                <div className="flex gap-6">
                  <div className="hidden lg:flex max-w-80">
                    <img
                      src={ClientImage}
                      className="rounded-lg w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="rounded-lg bg-secondary p-6 md:p-8 max-w-233.5">
                      <img
                        className="block w-4 md:w-6 mb-4 lg:mb-8"
                        src={QuoteIcon}
                        alt=""
                      />
                      <h5 className="text-2xl/8 lg:text-h5/10.5 mb-5 lg:mb-10">
                        Working with Havenly's Real Estate Consulting team was
                        an absolute pleasure! They guided us through the entire
                        buying process, providing invaluable insights and
                        ensuring we found our dream home. Their expertise and
                        commitment to our needs made all the difference!"
                      </h5>
                      <div className="lg:space-y-1">
                        <h6 className="text-lg lg:text-2xl">Emily R.</h6>
                        <span className="text-secondary-foreground font-normal">
                          Home Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-end mt-2 md:mt-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-8 rounded-full h-1.5 ${index === currentIndex ? "bg-primary" : "bg-secondary"} `}></button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <div>
                    <Chevron fillColor="fill-secondary-foreground" />
                  </div>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <div className="rotate-180">
                    <Chevron />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
