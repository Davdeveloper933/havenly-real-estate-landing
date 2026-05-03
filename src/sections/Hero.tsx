import Header from "../components/Header";
import Search from "../components/Search";

const Hero = () => {
  return (
    <div id="home" className="overflow-hidden">
      <section className="hero pb-5 md:pb-10.5">
        <Header />

        <div className="hero__content xl:pt-36">
          <div className="container">
            <div className="space-y-4 pt-30 lg:pt-68">
              <h1 className=" text-5xl lg:text-6xl xl:text-8xl leading-[1.2] text-white">
                Build Your Future
                <br />
                Own Your Space
              </h1>
              <span className="text-lg max-w-lg xl:text-xl font-normal text-white">
                Discover carefully curated properties and expertly developed
                communities designed for lasting value and an elevated
                lifestyle.
              </span>
            </div>

            <div className="pt-8 lg:pt-16 mt-3.5 lg:mt-7.5 border-t border-white">
              <Search />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
