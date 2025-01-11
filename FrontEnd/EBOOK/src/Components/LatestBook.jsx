import React, { useContext, useEffect, useState } from "react";
import Titre from "./titre";
import BookItem from "./bookItem";
import { bookContext } from "../Context/ProductContext";
import { motion } from "framer-motion";

function LatestBook() {
  const { books } = useContext(bookContext);
  const [latestBook, setLatestBook] = useState([]);

  useEffect(() => {
    setLatestBook(books.slice(20, 25)); // Update only when books change
  }, [books]);

  return (
    <>
      <div className="mt-10">
        <div className="text-center text-xl md:text-2xl lg:text-4xl mx-auto">
          <Titre texte1="Nos derniers livres" />
        </div>
        <p className="max-w-5xl text-gray-800 text-sm mx-auto text-center mt-2 tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          eaque, autem vero animi, ipsam placeat optio aliquid aperiam.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-6 lg:gap-y-8 mt-6 md:mt-20">
          {latestBook.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
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
        {/* Optional "Voir plus" button */}
        {/* <div className="flex items-center">
          <button className="px-6 bg-black py-3 text-white md:w-1/6 items-center mt-10 mx-auto">
            Voir plus
          </button>
        </div> */}
      </div>
    </>
  );
}

export default LatestBook;
