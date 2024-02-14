import { Fragment } from "react";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
