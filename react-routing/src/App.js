import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
