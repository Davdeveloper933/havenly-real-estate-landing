import ArrowRight from "./icons/ArrowRight";

interface Props {
  src: string;
  date: string;
  title: string;
}

const NewsCard = (Props: Props) => {
  const { src, date, title } = Props;
  return (
    <div className="news-card space-y-3.5">
      <div className="rounded-lg">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={src}
          alt=""
        />
      </div>
      <div>
        <span className="text-sm">{date}</span>
        <h6 className="text-xl mb-2">{title}</h6>
        <a href="/" className="text-primary text-xs">
          <div className="flex font-medium items-center gap-2">
            See Details
            <ArrowRight fillColor="fill-primary" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
