import NewsCard from "../components/NewsCard";
import SectionTitle from "../components/SectionTitle";
import { newsLetters } from "../constants";

const News = () => {
  const sectionTitleProps = {
    title: "Stay Updated with the Latest from EndeOnline",
    secondaryText:
      "Transforming homes, transforming lives: Havenly Real Estate's amazing home projects",
    buttonText: "More Articles",
    maxW: 123,
  };
  return (
    <section className="md:pt-20">
      <div className="container">
        <SectionTitle {...sectionTitleProps} />
        <div className="pt-4 md:pt-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {newsLetters.map((newsLetter, index) => (
              <div key={index} className="w-full">
                <NewsCard
                  src={newsLetter.src}
                  date={newsLetter.date}
                  title={newsLetter.title}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
