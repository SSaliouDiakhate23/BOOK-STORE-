import Hero from "../Components/Hero";
import LatestBook from "../Components/LatestBook";
import BestSellers from "../Components/BestSellers";
import OurPolicy from "../Components/OurPolicy";
import NewsLetters from "../Components/NewLetters";
import AuteurSection from "../Components/AuteurSection";
function Home() {
  return (
    <>
      <div className=" py-6 lg:pb-20 bg-orange-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Hero />
      </div>
      <div className="py-10 lg:pb-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <LatestBook />
      </div>
      <div className="py-10 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <BestSellers />
      </div>

      <div className="py-8 my-20 bg-black lg:pb-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <AuteurSection />
      </div>

      <div className="py-8 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <OurPolicy />
      </div>

      <div className="py-8 lg:pb-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white">
        <NewsLetters />
      </div>
    </>
  );
}

export default Home;
