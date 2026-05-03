import ArrowRight from "./icons/ArrowRight";

interface Props {
  src: string;
  title: string;
}

const ServiceCard = (Props: Props) => {
  const { src, title } = Props;
  return (
    <div className="card h-full max-h-[476px] bg-white justify-between border border-gray-300">
      <div className="px-6 p-5">
        <h5 className="text-2xl lg:text-h5 pb-2 md:pb-5">{title}</h5>
        <a href="/" className="text-primary text-sm">
          <div className="flex items-center font-medium gap-3">
            Learn More
            <ArrowRight fillColor="fill-primary" />
          </div>
        </a>
      </div>
      <div className="pt-5 lg:pt-10 xl:pt-20 h-[350px]">
        <img
          src={src}
          className="object-cover object-center w-full h-full rounded-b-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceCard;
