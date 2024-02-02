import { useState } from "react";
import ListItem from "./ListItems/ListItem";

// const items = [
//   {
//     id: 1,
//     discountedPrice: 340,
//     price: 450,
//     title: "Title of the Item 1",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 2,
//     discountedPrice: 320,
//     price: 40,
//     title: "Title of the Item 2",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 3,
//     discountedPrice: 340,
//     price: 400,
//     title: "Title of the Item 3",
//     thumbnail: "placeholder.png",
//   },
//   {
//     id: 3,
//     discountedPrice: 380,
//     price: 480,
//     title: "Title of the Item 4",
//     thumbnail: "placeholder.png",
//   },
// ];

const Products = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedprice] = useState(0);
  const [thumbnail, setThumbnil] = useState("");
  const [item, setItem] = useState({
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item 1",
    thumbnail: "placeholder.png",
  });

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDiscountedprice = (event) => {
    setDiscountedprice(event.target.value);
  };

  const handleThumbnail = (event) => {
    setThumbnil(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log({
      title,
      price,
      discountedPrice,
      thumbnail,
    });
    if (discountedPrice > price) {
      alert("Discounted price cannot be greater than price.");
      return;
    }
    setItem({
      title,
      price,
      discountedPrice,
      thumbnail,
    });
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
                value={title}
                onChange={handleTitle}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={handlePrice}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="discountedPrice">DiscountedPrice</label>
              <input
                type="number"
                placeholder="Enter discountedPrice"
                value={discountedPrice}
                onChange={handleDiscountedprice}
                required
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="text"
                placeholder="Enter thumbnail"
                value={thumbnail}
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
        {/* <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem>
        <ListItem data={items[2]}></ListItem>
        <ListItem data={items[3]}></ListItem>  */}
      </div>
    </div>
  );
};

export default Products;
