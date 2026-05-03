import LogoIcon from "@/assets/img/icons/logo.svg";

interface Props {
  color?: string;
}

const Logo = (Props: Props) => {
  const { color = "white" } = Props;
  return (
    <div className="logo">
      <a href="" id="">
        <div className="flex intems-center gap-1">
          <img src={LogoIcon} alt="" />
          <span className={`logo__text text-${color}`}>Havenly</span>
        </div>
      </a>
    </div>
  );
};

export default Logo;
