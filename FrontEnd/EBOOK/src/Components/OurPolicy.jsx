import { FaExchangeAlt, FaShippingFast, FaLock } from "react-icons/fa"; // Exemple d'icônes
import { motion } from "framer-motion";

const OurPolicy = () => {
  return (
    <div className="flex flex-col py-20 gap-12 sm:gap-2 text-gray-600 sm:flex-row justify-around text-center text-xs sm:text-xs md:text-base">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <FaExchangeAlt
          className="mx-auto mb-5 w-16 h-16 text-gray-600 lg:w-20 lg:h-20"
          color="black"
        />
        <p className="font-semibold text-black">Politique de retour facile</p>
        <p className="text-black">
          Nous offrons une politique de retour sans tracas
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <FaShippingFast
          className="mx-auto mb-5 w-16 h-16 lg:w-20 lg:h-20 text-gray-600"
          color="black"
        />
        <p className="font-semibold text-black">Livraison rapide</p>
        <p className="text-black">Votre livre livré rapidement à votre porte</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <FaLock
          className="mx-auto mb-5 w-16 h-16 text-gray-600 lg:w-20 lg:h-20"
          color="black"
        />
        <p className="font-semibold text-black">Paiement sécurisé</p>
        <p className="text-black">Vos informations sont toujours protégées</p>
      </motion.div>
    </div>
  );
};

export default OurPolicy;
