import AboutUs from "./sections/AboutUs";
import Clients from "./sections/Clients";
import Commitment from "./sections/Commitment";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import News from "./sections/News";
import Products from "./sections/Products";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Commitment />
      <AboutUs />
      <Clients />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <News />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
