import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
);
