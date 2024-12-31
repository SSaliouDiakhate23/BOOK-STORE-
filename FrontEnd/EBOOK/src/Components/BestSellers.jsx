import React from "react";
import Titre from "./titre";
import { Link } from "react-router-dom";
import { bookContext } from "../Context/ProductContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import BestSellersItems from "./BestSellersItems";
function BestSellers() {
  const { books } = useContext(bookContext);
  const [bestSellersBook, setBestSellersBook] = useState([]);
  useEffect(() => {
    const bestSellers = books.filter((book) => book.BestSellers === true);
    setBestSellersBook(bestSellers.slice(4, 10));
    console.log(bestSellers);
  }, [books]);
  return (
    <>
      <div className="mt-10">
        <div className=" text-center text-xl  md:text-2xl lg:text-4xl mx-auto">
          <Titre texte1="Nos Meilleurs Ventes" />
        </div>
        <p className="max-w-5xl text-gray-800 text-sm mx-auto text-center mt-2 tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          eaque, autem vero animi, ipsam placeat optio aliquid aperiam
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {bestSellersBook.map((book) => (
            <BestSellersItems
              key={book.id}
              id={book.id}
              auteur={book.author}
              titre={book.title}
              image={book.coverImage}
              prix={book.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BestSellers;
