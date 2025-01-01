import React from "react";

const NewsLetters = () => {
  const onSubmitHandle = (e) => {
    e.preventdefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-black ">
        Inscrivez-vous maintenant et profitez de 20% de réduction
      </p>
      <p className="text-black mt-3">
        Découvrez une vaste collection de livres électroniques adaptés à tous
        vos besoins. Rejoignez-nous dès aujourd'hui et commencez à lire en
        économisant !
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto border my-6  ">
        <input
          type="email"
          placeholder="your email"
          className="w-full outline-none sm:flex-1  placeholder:text-black pl-3 "
          required
        />
        <button
          className="bg-black  text-white text-xs py-4 px-10 "
          type="submit"
          onSubmit={(e) => {
            onSubmitHandle(e);
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetters;
