import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import { useState } from "react";

const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={"item-card"}>
      <img
        className={"img-fluid"}
        src={`/assets/${data.thumbnail}`}
        alt={data.title}
      />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>Rs {data.discountedPrice}</span>
          <small>
            <strike>Rs {data.price}</strike>
          </small>
        </div>
        <div>
          <h3>{data.title}</h3>
        </div>
      </div>
      <button className={"cart-add"}>
        <span>Add to cart</span>
        <img src={AddToCartIcon} alt="Cart Icon" />
      </button>
      <div className={"cart-addon"}>
        <button onClick={decreaseByOne}>
          <span>-</span>
        </button>
        <span className={"counter"}>{counter}</span>
        <button onClick={increaseByOne}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
