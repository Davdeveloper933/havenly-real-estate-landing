const Commitment = () => {
  return (
    <section className="pt-34 lg:pt-40">
      <div className="container">
        <div className="grid grid-flow-row md:grid-flow-col items-center gap-6 lg:gap-18">
          <h2 className="heading flex-1">
            Our Commitment to Your Real Estate Success
          </h2>
          <div className="">
            <div className="flex flex-col xs:flex-row items-center gap-x-9 sm:gap-x-26 md:gap-x-10 lg:gap-x-20 xl:gap-x-36">
              <div className="flex flex-col pb-3 justify-center items-center">
                <h4 className="flex items-center text-h4 ">
                  10
                  <span className="text-primary text-[2rem]">+</span>
                </h4>
                <span className="text-secondary-foreground">
                  Years of Experience
                </span>
              </div>
              <div className="flex flex-col pb-3 justify-center items-center">
                <h4 className="flex items-center text-h4 ">
                  4,3K
                  <span className="text-primary text-[2rem]">+</span>
                </h4>
                <span className="text-secondary-foreground">Revenue</span>
              </div>
              <div className="flex flex-col pb-3 justify-center items-center">
                <h4 className="flex items-center text-h4 ">
                  100
                  <span className="text-primary text-[2rem]">+</span>
                </h4>
                <span className="text-secondary-foreground">Project Done</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
