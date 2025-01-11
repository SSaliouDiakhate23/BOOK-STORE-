import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";

function bookItem({ id, titre, prix, image, auteur }) {
  return (
    <>
      <Link
        className="flex flex-col gap-3 hover:scale-105 duration-200"
        to={`/books/${id}`}
      >
        <div className="xl:h-72  sm:h-64 h-64 flex-shrink-0  text-xs md:text-base  ">
          <img src={image} alt={titre} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 text-xs md:text-base">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-light text-xs">{titre}</p>
            <p className="text-sm font-medium text-black">${prix}.00</p>
          </div>
          <p className="text-gray-600 font-light text-xs ">Par {auteur}</p>
          <div className="flex items-center justify-start gap-1">
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
          </div>
        </div>

        <button className="px-5 bg-black py-3 flex items-center justify-center gap-3 text-white  text-xs md:text-base ">
          {" "}
          Ajouter au panier
          <FiShoppingCart className="w-5 h-5 " />
        </button>
      </Link>
    </>
  );
}

export default bookItem;
