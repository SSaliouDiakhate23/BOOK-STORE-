import React from "react";

function titre({ texte1 }) {
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <p className="prata-regular text-center">{texte1}</p>
        <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
    </>
  );
}

export default titre;
