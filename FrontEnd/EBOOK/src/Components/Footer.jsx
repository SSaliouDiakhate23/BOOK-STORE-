import { FaBookOpen } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div className="">
          <div className="flex gap-5 items-center mb-6">
            <FaBookOpen className="w-12 h-12" />
            <p className="text-3xl prata-regular">MAGIC BOOKS</p>
          </div>
          <p className="w-full md:w-2/3 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            doloremque repudiandae culpa sequi, quo nemo neque adipisci beatae
            magnam ea magni aperiam illum consequuntur, perferendis deserunt?
            Est natus distinctio omnis.
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">COMPAGNY</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>Accueil</li>
            <li>À propos de nous</li>
            <li>Livraison</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>+1-212-456-987</li>
            <li>Contact@magicbooks.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm lg:text-base text-center">
          Copyright 2024@ magicbooks.com -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
