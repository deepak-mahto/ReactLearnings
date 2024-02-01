import Products from "./components/Products/products";
import Header from "./components/Products/Layout/Header";
import SubHeader from "./components/Products/Layout/SubHeader";

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Products />
    </div>
  );
};

export default App;
