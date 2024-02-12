import { useState } from "react";

const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  };

  const descreaseCounterByOne = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
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
          <span>₹{data.discountedPrice}</span>
          <small>
            <strike>₹{data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
      </div>
      <div className={"cart-addon"}>
        <button onClick={descreaseCounterByOne}>
          <span>-</span>
        </button>
        <span className={"counter"}>{counter}</span>
        <button onClick={increaseCounterByOne}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
