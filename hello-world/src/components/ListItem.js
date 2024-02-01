import AddToCartIcon from "../assets/icons/add_cart.svg";

const ListItem = () => {
  return (
    <div>
      <img src="/assets/placeholder.png" alt="some title" />
      <div>
        <div>
          <span>RS 340</span>
          <small>
            <strike>Rs 450</strike>
          </small>
        </div>
        <div>
          <h3>Title of the item</h3>
        </div>
      </div>
      <button>
        <span>Add to cart</span>
        <img src={AddToCartIcon} alt="Cart Icon" />
      </button>
    </div>
  );
};

export default ListItem;
