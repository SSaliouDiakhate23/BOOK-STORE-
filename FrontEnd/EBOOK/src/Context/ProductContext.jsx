import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../assets/assets";

export const bookContext = createContext();

function ProductContextProvider(props) {
  const currency = "$";
  const frais = 15;

  return (
    <bookContext.Provider value={{ books, currency, frais }}>
      {props.children}
    </bookContext.Provider>
  );
}

export default ProductContextProvider;
