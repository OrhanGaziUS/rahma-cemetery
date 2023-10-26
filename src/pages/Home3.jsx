import data from "../Data.json";
import About from "../components/About/About";
import Iconbox from "../components/Iconbox/Iconbox";
import ReviewSection from "../components/Review/ReviewSection";
import Contact from "../components/Contact/Contact";
import PortfolioSection from "../components/Protfolio/PortfolioSection";
import Hero3 from "../components/Hero/Hero3";

const Home3 = () => {
  const {
    heroData,
    aboutData,
    serviceData,
    portfolioData,
    reviewData,
    contactData,
    socialData,
    socialData2,
  } = data;
  return (
    <>
      <Hero3 data={heroData.homeThreeHero} socialData={socialData2} />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={serviceData} data-aos="fade-right" />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      {/* <ReviewSection data={reviewData} data-aos="fade-right" /> */}
      <Contact
        data={contactData}
        socialData={socialData}
        data-aos="fade-right"
      />
    </>
  );
};

export default Home3;
