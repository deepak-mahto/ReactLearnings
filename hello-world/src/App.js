import Products from "./components/Products/products";
import Header from "./components/Products/Layout/Header";
import SubHeader from "./components/Products/Layout/SubHeader";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddItem = () => {
    setCartItems(cartItems + 1);
  };

  const handleRemoveItem = () => {
    setCartItems(cartItems - 1);
  };

  return (
    <div>
      <Header count={cartItems} />
      <SubHeader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default App;
