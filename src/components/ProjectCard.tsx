import ArrowRight from "./icons/ArrowRight";

interface Props {
  title: string;
  desc: string;
  src: string;
}

const ProjectCard = (Props: Props) => {
  const { title, desc, src } = Props;
  return (
    <div>
      <div>
        <div className="h-100 md:h-auto rounded-lg">
          <img
            className="object-cover rounded-lg h-full w-full object-center"
            src={src}
            alt=""
          />
        </div>
        <div className="space-y-2 pb-4">
          <h5 className="text-2xl lg:text-h5">{title}</h5>
          <p className="overflow-hidden max-h-14  text-secondary-foreground text-base/5 lg:text-lg/7 font-normal">
            {desc}
          </p>
          <a href="/" className="text-primary text-xs">
            <div className="flex items-center gap-2">
              See Details
              <ArrowRight fillColor="fill-primary" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
