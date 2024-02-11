import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import ProductItem from "./components/ProductItem";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/1" element={<ProductItem />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
