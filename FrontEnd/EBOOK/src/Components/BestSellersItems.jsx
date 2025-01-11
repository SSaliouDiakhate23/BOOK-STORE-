import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function BestSellersItems({ id, titre, prix, image, auteur }) {
  return (
    <Link
      to={`/Books/${id}`}
      className="flex border overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-xs md:text-base"
    >
      {/* Conteneur de l'image */}
      <div className="w-52 h-52 md:w-64 md:h-64 flex-shrink-0">
        <img src={image} alt={titre} className="w-full h-full object-cover" />
      </div>
      {/* Contenu textuel */}
      <div className="bg-black py-4 px-4 lg:px-6 flex flex-col gap-3 items-start justify-start flex-grow text-xs md:text-base">
        <h2 className="text-white md:text-base font-semibold text-xs sm:text-sm">
          {titre}
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm">{auteur}</p>
        <div className="flex items-center justify-start gap-1">
          <FaStar className="h-5 w-5" color="orange" />
          <FaStar className="h-5 w-5" color="orange" />
          <FaStar className="h-5 w-5" color="orange" />
          <FaStar className="h-5 w-5" color="orange" />
        </div>
        <p className="text-white text-xs sm:text-sm">${prix}.00</p>
        <button className="xl:px-6 px-2 xl:py-3 py-2 mt-auto text-white flex gap-2 items-center justify-start border border-white hover:bg-white hover:text-black transition-colors">
          <p className="text-xs lg:text-sm">Ajouter au panier</p>
          <FiShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </Link>
  );
}

export default BestSellersItems;
