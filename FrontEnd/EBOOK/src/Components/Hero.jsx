import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import Image from "./image11.jpg";
import Image2 from "./image8.jpg";
import Image3 from "./image6.jpg";

function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 md:gap-10 lg:gap-12  my-10 xl:flex-row">
        <div className=" flex-col flex md:mt-10  justify-left items-center xl:items-start gap-3 md:gap-4 lg:gap-6">
          <p className="text-3xl md:text-4xl lg:text-6xl  prata-regular">
            Trouver Votre
          </p>

          <p className="text-3xl md:text-4xl lg:text-6xl prata-regular">
            {" "}
            Prochain Livres !{" "}
          </p>

          <p className="text-sm max-w-2xl tracking-wide text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            placeat, voluptatum deserunt quas eos obcaecati ullam culpa facilis
            repellendus rerum in.
          </p>
          {/* <div className="flex gap-3 items-center justify-center">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer" />
            <AiFillInstagram className="w-6 h-6 cursor-pointer" />
          </div> */}
          <button className="px-8 bg-black py-3 text-white md:w-1/4">
            {" "}
            Explorer
          </button>
        </div>
        <div className="flex gap-6 md:gap-10 items-center justify-center w-full xl:w-1/2">
          <div className="flex flex-col gap-2 w-1/3 text-center ">
            <img src={Image} className="w-full rounded-t-full" />
            <p className="text-xl font-medium  text-center">Ubuntu</p>
            <p className="text-sm text-center">Souleymane Bachir Diagne</p>
          </div>
          <div className="flex flex-col gap-2 w-1/3 text-center ">
            <p className="text-xl font-medium  text-center">
              Une si longue lettre
            </p>
            <p className="text-sm text-center">Mariama Ba</p>
            <img src={Image2} className="w-full rounded-b-full" />
          </div>
          <div className="flex flex-col gap-2 w-1/3 text-center ">
            <img src={Image3} className="w-full rounded-b-full" />
            <p className="text-xl font-medium  text-center">
              L'emotion et la raison
            </p>
            <p className="text-sm text-center">Leopaul Sedar Seghor</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
