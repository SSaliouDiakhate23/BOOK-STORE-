import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { books, authors } from "../assets/assets";

export const bookContext = createContext();

function ProductContextProvider(props) {
  const [showSearch, setShowSearch] = useState(false);
  const currency = "$";
  const frais = 15;

  return (
    <bookContext.Provider
      value={{ books, currency, frais, setShowSearch, showSearch, authors }}
    >
      {props.children}
    </bookContext.Provider>
  );
}

export default ProductContextProvider;
