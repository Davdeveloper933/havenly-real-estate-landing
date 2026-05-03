import PersonIcon from "@/assets/img/icons/person.svg";
import EmailIcon from "@/assets/img/icons/email.svg";
import ContactInputField from "../components/ContactInputField";
import PrimaryButton from "../components/PrimaryButton";

const Contact = () => {
  return (
    <section
      id="contacts"
      className={`relative bg-[url(/src/assets/img/contact-bg.jpg)] bg-no-repeat bg-cover py-14.5 mt-10 md:mt-20.5`}>
      <div className="absolute w-full h-full top-0 left-0 z-1 bg-black/60"></div>
      <div className="px-3 m-auto sm:container">
        <div className="grid w-full gap-6 grid-cols-12 justify-between items-center relative z-2">
          <div className="col-span-12 md:col-span-5 text-grayscale">
            <h3 className="text-4xl lg:text-5xl">
              Need a help to find your comfort home?
            </h3>
            <p className="max-w-150 mt-4">
              Don’t hesitate to get in touch with us and begin your journey to
              owning your dream home. We’re here to guide you every step of the
              way!
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-lg w-full bg-white p-6 md:p-8">
              <h5 className="text-2xl lg:text-h5">
                Haven't found what you're looking for? Fill this form
              </h5>
              <p className="text-secondary-foreground font-medium text-xl">
                We will contact you in 24 hours
              </p>
              <form>
                <div className="gap-4 mt-8 flex flex-col">
                  <ContactInputField
                    label="Full Name"
                    icon={PersonIcon}
                    placeholder="Enter your name"
                  />
                  <ContactInputField
                    label="Email Address"
                    icon={EmailIcon}
                    placeholder="example@email.com"
                  />
                  <ContactInputField
                    as="textarea"
                    label="Your message"
                    icon={EmailIcon}
                    placeholder="Write text here ..."
                  />
                </div>
                <div className="flex justify-end mt-4 md:mt-8">
                  <PrimaryButton type="submit" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
