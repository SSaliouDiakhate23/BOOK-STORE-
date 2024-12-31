import { Link, NavLink } from "react-router";
import { FaBookOpen } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <FaBookOpen className="w-12 h-12" />
          <p className="text-3xl prata-regular">MAGIC BOOKS</p>
        </div>
        <div className="hidden md:flex items-center justify-center  gap-4 sm:gap-6 md:gap-8 text-black text-md leading-3">
          <NavLink className="flex flex-col gap-2 h-3 " to={"/"}>
            <p>ACCUEIL</p>
            <div className="w-full  border-b-2 border-black "></div>
          </NavLink>

          <NavLink className="flex flex-col gap-2 h-3" to={"/collection"}>
            <p>LIVRES</p>
            {/* <div className="w-full border-b-2 border-black "></div> */}
          </NavLink>

          <NavLink className="flex flex-col gap-2 h-3" to={"/About"}>
            <p>ACTEURS</p>
            {/* <div className="w-full  border-b-2 border-black "></div> */}
          </NavLink>

          <NavLink className="flex flex-col gap-2 h-3" to={"/contact"}>
            <p>CONTACT</p>
            {/* <div className="w-full border-b-2 border-black "></div> */}
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-6 min-w-[80px]">
          <div className="flex gap-2 items-center justify-center">
            <div className="flex items-center gap-1 border-b-2 py-2 text-sm text-left border-black">
              <CiSearch className="w-5 h-5" />

              <input
                type="text"
                placeholder="Recherche livre"
                className="outline-none hidden lg:block placeholder:text-gray-600 placeholder:text-sm bg-transparent"
              />
            </div>
            <div className="relative">
              <Link className="cursor-pointer" to={"/cart"}>
                <FaShoppingCart className="w-6 h-6 cursor-pointer" />
              </Link>
              <p className="absolute w-4 h-4 -top-1 -right-3 bg-red-500 rounded-full text-center text-white text-xs">
                6
              </p>
            </div>
          </div>
          <p className="border-black border-l-2 px-2 cursor-pointer ">LOGIN</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
