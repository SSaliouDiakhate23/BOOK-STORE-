import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import LatestBook from "../Components/LatestBook";
import BestSellers from "../Components/BestSellers";
import OurPolicy from "../Components/OurPolicy";
import NewsLetters from "../Components/NewLetters";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <div className="py-6 lg:pb-20 bg-orange-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        {/* <h1>Home</h1>
      <p>Welcome to the home page</p>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <img src={book.coverImage} alt={book.title} className="w-60" />
          </div>
        ))}
      </div> */}
        <NavBar />
        <Hero />
      </div>
      <div className="py-10 lg:pb-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <LatestBook />
      </div>
      <div className="py-10 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <BestSellers />
      </div>

      <div className="py-8 lg:pb-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <OurPolicy />
      </div>

      <div className="py-8 lg:pb-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <NewsLetters />
      </div>

      <div className=" py-8 bg-black text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
