import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground py-20">
      <div className="container">
        <div className="mb-16 gap-y-6 ">
          <div className=" flex justify-center lg:justify-start mb-4 lg:mb-8">
            <Logo />
          </div>
          <div className="flex flex-col gap-y-6 lg:flex-row justify-between">
            <div>
              <div className="">
                <p className="mb-8 text-center lg:text-left font-footer-heading max-w-full lg:max-w-130 text-2xl lg:text-h5 text-white font-normal">
                  We are a real estate Developer based in United Kingdom
                </p>
              </div>
              <div className="col-span-4  lg:col-span-auto">
                <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-6">
                  <div>
                    <h4 className="text-secondary-foreground mb-3 text-base font-normal">
                      General Enquiries
                    </h4>
                    <span className="text-white text-base">
                      info@example.com
                    </span>
                  </div>
                  <div>
                    <h4 className="text-secondary-foreground mb-3 text-base font-normal">
                      Phone
                    </h4>
                    <span className="text-white text-base">
                      +1 555-0123-456
                    </span>
                  </div>
                  <div>
                    <h4 className="text-secondary-foreground mb-3 text-base font-normal">
                      Office
                    </h4>
                    <span className="text-white text-base">
                      789 Elm Street, Springfield, Illinois 62704
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <nav className="col-span-4 lg:col-span-2">
              <h4 className="text-secondary-foreground mb-4 text-base font-normal">
                Navigation
              </h4>
              <div className="flex gap-6 text-white text-base">
                <div className="flex flex-col gap-5">
                  <a href="">Home</a>
                  <a href="">About Us</a>
                  <a href="">Listing Product</a>
                </div>
                <div className="flex flex-col gap-5">
                  <a href="">FAQ’s</a>
                  <a href="">Blog</a>
                  <a href="">Agent</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex justify-center border-t border-secondary-foreground pt-6 lg:py-6">
          <span className="text-base text-secondary-foreground">
            © 2025 Havenly Group, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
