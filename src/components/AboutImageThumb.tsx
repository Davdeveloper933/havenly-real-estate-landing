interface Props {
  imgURL: any;
  changeBigPropertyImage: any;
  bigPropertyImg: string;
}

const AboutImageThumb = (Props: Props) => {
  const { imgURL, changeBigPropertyImage, bigPropertyImg } = Props;

  const handleClick = () => {
    if (bigPropertyImg !== imgURL.bigPropertyImg) {
      changeBigPropertyImage(imgURL.bigPropertyImg);
    }
  };
  // {`{`border-2 rounded-sm ${bigThumbImg === imgURL.bigThumb ? 'border-primary' : 'border-transparent'}
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-sm ${bigPropertyImg === imgURL.bigPropertyImg ? "border-primary" : "border-transparent"} rounded-sm w-8 h-8 cursor-pointer `}
    >
      <img
        src={imgURL.thumbnail}
        className="object-cover  w-full h-full rounded-sm"
        alt=""
      />
    </div>
  );
};

export default AboutImageThumb;
