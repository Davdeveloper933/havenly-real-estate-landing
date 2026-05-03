import Development1 from "@/assets/img/products/development1.png";
import FlameIcon from "@/assets/img/icons/flame.svg";
import LocationIcon from "@/assets/img/icons/card-location.svg";
import ShowerIcon from "@/assets/img/icons/shower.svg";
import BedIcon from "@/assets/img/icons/king-bed.svg";
import ArrowRight from "./icons/ArrowRight";

interface Props {
  size: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
  urgent: boolean;
  src: string;
}

const ProductCard = (Props: Props) => {
  const { size, title, location, beds, baths, price, urgent, src } = Props;
  return (
    <div className="card product-card overflow-hidden">
      <div className="w-full overflow-hidden">
        <a href="/" className="relative flex justify-center items-center">
          <img src={src} className="object-cover w-full" alt="" />
          <div className="product-card__size absolute top-3 left-3 rounded-lg flex justify-center bg-white px-2 py-1">
            <span className="font-semibold text-sm">{size}</span>
          </div>
        </a>
      </div>

      <div className="product-card__content space-y-1 mt-2">
        {urgent && (
          <div className="rounded-full inline-block bg-warning px-2 py-0.5">
            <div className="flex gap-2">
              <img src={FlameIcon} alt="" />
              <span className="text-warning-foreground font-semibold text-xs">
                Only 2 units left
              </span>
            </div>
          </div>
        )}
        <h6 className="text-xl">{title}</h6>
        <div className="font-normal text-sm space-x-2 flex items-center">
          <div className="flex items-center gap-2">
            <img src={LocationIcon} alt="" />
            <span>{location}</span>
          </div>
          <div className="rounded-full w-1 h-1 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <img src={BedIcon} alt="" />
            <span>{beds} Bed</span>
          </div>
          <div className="rounded-full w-1 h-1 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <img src={ShowerIcon} alt="" />
            <span>{baths} Bath</span>
          </div>
        </div>
        <div className="flex mt-2 items-center justify-between">
          <h6 className="text-lg">${price.toFixed(3)}</h6>
          <button className="btn btn-outline flex text-xs items-center gap-2">
            Book a Call
            <ArrowRight fillColor="fill-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
