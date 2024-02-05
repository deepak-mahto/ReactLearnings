import Products from "./components/Products/products";
import Header from "./components/Products/Layout/Header";
import SubHeader from "./components/Products/Layout/SubHeader";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }
    setCartItems([...items]);
    // setCartItems(cartItems + 1);
  };

  const handleRemoveItem = (item) => {
    let items = [...cartItems];
    let index = items.findIndex((i) => i.id === item.id);
    if (items[index].quantity === 0) {
      items.splice(index, 1);
    } else {
      items[index] = item;
    }
    setCartItems([...items]);
    // setCartItems(cartItems - 1);
  };

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} />
      <SubHeader />
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default App;
