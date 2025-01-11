import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { bookContext } from "../Context/ProductContext";
import { GiRamProfile } from "react-icons/gi";
import Titre from "../Components/titre";
function Books() {
  const { BookId } = useParams();
  const { books } = useContext(bookContext);
  const [book, setBook] = useState([]);
  useEffect(() => {
    const cpBook = books.find((book) => book.id == BookId);
    setBook(cpBook);
    console.log(cpBook);
  }, [BookId]);
  return (
    <>
      <div className=" py-6 lg:pb-20 bg-orange-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex w-full flex-col-reverse sm:flex-row justify-center gap-10 lg:gap-16 border-t border-gray-950 pt-10">
          <div className="cursor-pointer">
            <img
              src={book.coverImage}
              alt=""
              className="object-cover sm:max-w-[450px] sm:max-h-[450px] lg:max-w-[500px] lg:max-h-[500px] xl:max-w-[700px] xl:max-h-[700px]"
            />
          </div>
          <div className="sm:w-1/2 w-full  mt-4 flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
              {book.title}
            </h1>
            <div className="flex items-center justify-start gap-1 mt-3">
              <FaStar className="h-5 w-5" color="orange" />
              <FaStar className="h-5 w-5" color="orange" />
              <FaStar className="h-5 w-5" color="orange" />
              <FaStar className="h-5 w-5" color="orange" />
            </div>
            <div className="mt-4 md:mt-6 ">
              <p className="text-black font-semibold text-sm md:text-base lg:text-2xl tracking-wide">
                {book.price}.00$
              </p>
              <p className="text-sm w-full md:text-base max-w-3xl lg:text-lg font-light mt-4 md:mt-6">
                {book.description}
              </p>
            </div>
            <p className="text-sm md:text-base max-w-3xl lg:text-lg font-light mt-4 md:mt-6">
              Categorie: <span className="font-medium">{book.category}</span>
            </p>
            <h1 className="text-md md:text-xl lg:text-xl mt-4 md:mt-6 font-light">
              Auteur: <span className="font-semibold">{book.author}</span>
            </h1>
            <button className="bg-gray-900 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border hover:border-black text-white px-8 py-3 rounded mt-4  md:mt-8">
              Ajouter au Panier
            </button>
            <hr className="w-full bg-black h-[1px] mb-6 my-6 md:my-10" />
            <div className="text-sm flex flex-col gap-2">
              <p>Paiement 100% sécurisé</p>
              <p>Politique de retour facile</p>
              <p>Service client 24h/24 et 7j/7</p>
            </div>
          </div>
        </div>
        <div className="text-center text-xl md:text-2xl lg:text-4xl mx-auto mt-10 lg:mt-12 ">
          <Titre texte1="Les Avis de nos Clients" />
        </div>

        <div className="mt-10 lg:mt-20  mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          {book?.reviews?.map((review, index) => (
            <div
              key={index}
              className="bg-black rounded-lg px-4 py-4 cursor-pointer"
            >
              <div className="flex gap-3">
                <div className="rounded-full bg-gray-300 flex items-center justify-center p-2">
                  <GiRamProfile
                    color="black"
                    className="h-6 w-6 lg:h-10 lg:w-10"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-sm text-gray-300 font-bold ">
                    Serigne Saliou Diakhate
                  </p>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-start gap-1 ">
                      <FaStar className="h-3 w-3" color="orange" />
                      <FaStar className="h-3 w-3" color="orange" />
                      <FaStar className="h-3 w-3" color="orange" />
                      <FaStar className="h-3 w-3" color="orange" />
                    </div>
                    <p className="text-xs text-gray-400">il y'a 2 jours</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-xs mt-3">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
