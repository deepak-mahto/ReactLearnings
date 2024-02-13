import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
};

export default App;
