import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

export const productContext = createContext();

function ProductContextProvider(props) {
  const currency = "$";
  const frais = 15;

  return (
    <productContext.Provider value={{ products, currency, frais }}>
      {props.children}
    </productContext.Provider>
  );
}

export default ProductContextProvider;
