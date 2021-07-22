import React from "react";
import Navi from "./components/Navi/Navi";
import ProductList from "./components/Product/ProductList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navi />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
