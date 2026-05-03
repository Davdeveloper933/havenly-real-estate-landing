import AboutImageThumb from "./AboutImageThumb";
import AboutImage from "@/assets/img/about-image.png";
import { propertyImages } from "../constants";
import { useState } from "react";

const AboutImageGallery = () => {
  const [bigPropertyImg, setBigPropertyImg] = useState(AboutImage);
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div>
          <img
            src={bigPropertyImg}
            alt="About property image"
            className="w-full h-90 object-cover object-center rounded-lg lg:min-w-133"
          />
        </div>
        <div className="flex bottom-6 left-6 absolute items-center justify-between bg-white gap-2 p-2 rounded-lg">
          {propertyImages.map((image, index) => (
            <div key={index}>
              <AboutImageThumb
                bigPropertyImg={bigPropertyImg}
                imgURL={image}
                changeBigPropertyImage={(image) => setBigPropertyImg(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImageGallery;
