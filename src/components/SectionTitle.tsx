import ArrowRight from "./icons/ArrowRight";
import PrimaryButton from "./PrimaryButton";

interface Props {
  title: string;
  secondaryText: string;
  buttonText: string;
  maxW: number;
}

const SectionTitle = (Props: Props) => {
  const { title, secondaryText, buttonText, maxW = 100 } = Props;
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center ">
        <div>
          <h3 className={`heading max-w-${maxW} flex-1`}>{title}</h3>
        </div>
        <div className={`space-y-7 ${maxW > 100 ? "pr-3" : ""}`}>
          <p className="text-secondary-foreground font-medium max-w-[728px] text-xl">
            {secondaryText}
          </p>
          <PrimaryButton text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
