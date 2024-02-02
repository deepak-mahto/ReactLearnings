import { useState } from "react";
import ListItem from "./ListItems/ListItem";

const Products = () => {
  const [item, setItem] = useState({
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item 1",
    thumbnail: "placeholder.png",
  });

  const handleInput = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (item.discountedPrice > item.price) {
      alert("Discounted price cannot be greater than price.");
      return;
    }
  };
  return (
    <div className={"product-list"}>
      <div className={"product-wrapper"}>
        <div className={"form"}>
          <form onSubmit={submitForm}>
            <h1>Item card details</h1>
            <div className={"input-field"}>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                placeholder="Enter Title"
                value={item.title}
                onChange={handleInput}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="number"
                placeholder="Enter Price"
                value={item.price}
                onChange={handleInput}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="discountedPrice">DiscountedPrice</label>
              <input
                name="discountedPrice"
                type="number"
                placeholder="Enter discountedPrice"
                value={item.discountedPrice}
                onChange={handleInput}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                name="thumbnail"
                type="text"
                placeholder="Enter thumbnail"
                value={item.thumbnail}
                onChange={handleInput}
                required
              />
            </div>
            <div className={"submit-wrap"}>
              <button>Update</button>
            </div>
          </form>
        </div>
        <ListItem data={item}></ListItem>
      </div>
    </div>
  );
};

export default Products;
