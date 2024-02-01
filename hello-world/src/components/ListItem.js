import AddToCartIcon from "../assets/icons/add_cart.svg";

const ListItem = () => {
  return (
    <div className={"item-card"}>
      <img className={"img-fluid"} src="/assets/placeholder.png" alt="some title" />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>RS 340</span>
          <small>
            <strike>Rs 450</strike>
          </small>
        </div>
        <div>
          <h3>Title of the item</h3>
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
