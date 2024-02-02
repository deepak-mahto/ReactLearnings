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

  const handleTitle = (event) => {
    setItem({
      ...item,
      title: event.target.value,
    });
  };

  const handlePrice = (event) => {
    setItem({
      ...item,
      price: event.target.value,
    });
  };

  const handleDiscountedprice = (event) => {
    setItem({
      ...item,
      discountedPrice: event.target.value,
    });
  };

  const handleThumbnail = (event) => {
    setItem({
      ...item,
      thumbnail: event.target.value,
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
                type="text"
                placeholder="Enter Title"
                value={item.title}
                onChange={handleTitle}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="Enter Price"
                value={item.price}
                onChange={handlePrice}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="discountedPrice">DiscountedPrice</label>
              <input
                type="number"
                placeholder="Enter discountedPrice"
                value={item.discountedPrice}
                onChange={handleDiscountedprice}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="text"
                placeholder="Enter thumbnail"
                value={item.thumbnail}
                onChange={handleThumbnail}
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
