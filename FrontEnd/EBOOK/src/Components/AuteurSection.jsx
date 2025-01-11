import Titre from "./titre";
import { bookContext } from "../Context/ProductContext";
import { useContext } from "react";
import { motion } from "framer-motion";

function AuteurSection() {
  const { authors } = useContext(bookContext);

  return (
    <div className="cursor-pointer">
      <div className="text-center text-xl md:text-2xl lg:text-4xl mx-auto text-white">
        <Titre texte1="Connaissez vous ??" />
      </div>
      <p className="max-w-5xl text-white text-sm mx-auto text-center mt-2 tracking-wide">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        eaque, autem vero animi, ipsam placeat optio aliquid aperiam
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        {authors.map((author) => (
          <motion.div
            key={author.id}
            className="bg-black flex flex-row gap-6 p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start gap-3 text-white w-1/2 xl:w-2/3">
              <h2 className="text-white text-sm md:text-base lg:text-xl ">
                {author.name}
              </h2>
              <p className="text-gray-300">A propos de l'auteur:</p>
              <p className="text-white text-xs xl:text-sm">
                {author.description}
              </p>
              <p className="text-gray-300 text-xs xl:text-base">
                date de Naissance: {author.dateOfBirth}
              </p>
              <p className="text-gray-300 text-xs xl:text-base">
                date de Deces: {author.dateOfDeath}
              </p>
            </div>
            <div className="w-1/2 xl:w-1/3">
              <img
                src={author.image}
                alt={author.name}
                className="w-full lg:rounded-b-full h-64 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <motion.button
          className="px-8 bg-white py-3 hover:bg-orange-100 duration-200 text-black mx-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explorer
        </motion.button>
      </div>
    </div>
  );
}

export default AuteurSection;
