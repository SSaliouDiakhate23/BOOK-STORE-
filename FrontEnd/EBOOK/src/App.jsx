import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Collection from "./Pages/collection";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Books from "./Pages/Books";
import Cart from "./Pages/cart";
import Login from "./Pages/login";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <div className="py-6 bg-orange-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
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
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Books/:BookId" element={<Books />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className=" py-8 bg-black text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
