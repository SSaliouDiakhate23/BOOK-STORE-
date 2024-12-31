import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";

function bookItem({ id, titre, prix, image, auteur }) {
  return (
    <>
      <Link className="flex flex-col gap-3" to={`/books/${id}`}>
        <img src={image} alt="" className="lg:h-96" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-light text-sm">{titre}</p>
            <p className="text-sm font-medium text-black">${prix}.00</p>
          </div>
          <p className="text-gray-600 font-light text-sm">By {auteur}</p>
          <div className="flex items-center justify-start gap-1">
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
            <FaStar className="h-5 w-5" color="orange" />
          </div>
        </div>

        <button className="px-5 bg-black py-3 flex items-center justify-center gap-3 text-white ">
          {" "}
          Ajouter au panier
          <FiShoppingCart className="w-5 h-5 " />
        </button>
      </Link>
    </>
  );
}

export default bookItem;
