import AboutImageGallery from "../components/AboutImageGallery";
import { aboutUs } from "../constants";
import ArrowRight from "@/assets/img/icons/arrow.svg";

function AboutUs() {
  return (
    <section id="about-us" className="about-us pt-4 lg:pt-16">
      <div className="container">
        <div className="about-us__content grid grid-flow-row lg:grid-flow-col gap-y-6 md:gap-x-6">
          <div className="">
            <AboutImageGallery />
          </div>
          <div className="flex flex-wrap xl:flex-nowrap md:gap-x-6">
            <div className="bg-secondary lg:max-w-[362px] rounded-lg p-4">
              <p className="font-medium text-base leading-[155%]">
                {aboutUs[0]}
              </p>
            </div>
            <div className="flex flex-col gap-y-6 justify-between">
              <div className="h-full">
                <div className="bg-secondary  rounded-lg p-4">
                  <p className="font-medium text-base leading-[155%]">
                    {aboutUs[1]}
                  </p>
                </div>
              </div>

              <div className="">
                <button type="button" className="btn btn-primary">
                  <div className="flex items-center gap-3">
                    Learn More
                    <img src={ArrowRight} alt="arrow right" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
