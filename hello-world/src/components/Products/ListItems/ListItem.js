import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import { Fragment, useState } from "react";
import Modal from "../UI/Modal";

const ListItem = ({ data, updateItemTitle }) => {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };

  return (
    <Fragment>
      <div onClick={handleModal} className={"item-card"}>
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
        <button onClick={() => updateItemTitle(data.id)}>
          Update the Title
        </button>
        {counter <= 0 ? (
          <button className={"cart-add"} onClick={increaseByOne}>
            <span>Add to cart</span>
            <img src={AddToCartIcon} alt="Cart Icon" />
          </button>
        ) : (
          <div className={"cart-addon"}>
            <button onClick={decreaseByOne}>
              <span>-</span>
            </button>
            <span className={"counter"}>{counter}</span>
            <button onClick={increaseByOne}>
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      {showModal && <Modal onClose={handleModal}/>}
    </Fragment>
  );
};

export default ListItem;
