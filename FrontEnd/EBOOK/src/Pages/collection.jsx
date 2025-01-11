import { useContext, useEffect, useState } from "react";
import Titre from "../Components/titre";
import { bookContext } from "../Context/ProductContext";
import BookItem from "../Components/bookItem";
import { RiComputerFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { FaMoneyBill } from "react-icons/fa";
import { GiBrainTentacle } from "react-icons/gi";
import { RiChatHistoryFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Collection() {
  const { books } = useContext(bookContext);
  const [filterBook, setfilterBook] = useState([]);
  const [selectCategorie, setSelectCategorie] = useState("All");

  function filterBooks() {
    let cpBooks = [...books];
    if (selectCategorie === "All") {
      setfilterBook(books);
      return;
    }
    cpBooks = cpBooks.filter(
      (book) => book.category.toLowerCase() === selectCategorie.toLowerCase()
    );
    console.log(cpBooks);
    setfilterBook(cpBooks);
  }
  useEffect(() => {
    filterBooks();
  }, [selectCategorie]);

  useEffect(() => {
    setfilterBook(books);
  }, []);
  return (
    <>
      <div className=" py-6 lg:pb-20 bg-orange-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
          <div className="min-w-60 p-3 border">
            <p className="text-gray-600 md:text-lg">Categorie</p>
            <div className="flex flex-col gap-2 my-6">
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "All" ? "bg-black p-3 text-white" : ""
                } `}
                onClick={() => {
                  setSelectCategorie("All");
                }}
              >
                Tous les livres
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150  ${
                  selectCategorie === "Programmation"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Programmation");
                }}
              >
                Informatique
                <RiComputerFill className={`h-6 w-6`} />
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Roman" ? "bg-black p-3 text-white" : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Roman");
                }}
              >
                Roman
                <FaBookOpen className={`h-6 w-6`} />
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Philosophie"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Philosophie");
                }}
              >
                Philosophie
                <FaBrain className={`h-6 w-6`} />
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Développement personnel"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Développement personnel");
                }}
              >
                Dev Personnel
                <GiMeditation className={`h-6 w-6`} />
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Affaires"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Affaires");
                }}
              >
                Affaires
                <FaMoneyBill className={`h-6 w-6`} />
              </p>

              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Innovation"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Innovation");
                }}
              >
                Innovation
                <GiBrainTentacle className={`h-6 w-6`} />
              </p>
              <p
                className={`text-xs md:text-sm flex justify-between lg:text-md flex-nowrap cursor-pointer text-gray-800 p-3 transition-all ease-in-out duration-150 ${
                  selectCategorie === "Histoire"
                    ? "bg-black p-3 text-white"
                    : ""
                } `}
                onClick={() => {
                  setSelectCategorie("Histoire");
                }}
              >
                Histoire
                <RiChatHistoryFill className={`h-6 w-6`} />
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center my-4 sm:mt-0">
              <div className=" text-md md:text-lg text-gray-600">
                <p className="text-gray-600 md:text-lg lg:text-2xl">
                  TOUTES NOS LIVRES
                </p>
              </div>
              <select name="" id="" className="border p-2 text-xs lg:text-md">
                <option value="">Filtrer par: le plus normal</option>
                <option value="">Filtrer par: le plus chere</option>
                <option value="">Filtrer par: le moins chere</option>
              </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 mt-4">
              {filterBook.map((book, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                >
                  <BookItem
                    id={book.id}
                    image={book.coverImage}
                    titre={book.title}
                    auteur={book.author}
                    prix={book.price}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
