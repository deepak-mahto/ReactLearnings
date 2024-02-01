import AddToCartIcon from "../assets/icons/add_cart.svg";

const ListItem = ({ data }) => {
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
    </div>
  );
};

export default ListItem;
