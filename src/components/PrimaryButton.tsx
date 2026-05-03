import ArrowRight from "./icons/ArrowRight";

interface Props {
  text: string;
  type?: "submit" | "reset" | "button";
}

const PrimaryButton = (Props: Props) => {
  const { text, type = "button" } = Props;
  return (
    <button
      type={type}
      className="btn w-full xs:w-auto flex justify-center btn-primary">
      <div className="flex items-center gap-3">
        {text}
        <ArrowRight fillColor="fill-white" />
      </div>
    </button>
  );
};

export default PrimaryButton;
