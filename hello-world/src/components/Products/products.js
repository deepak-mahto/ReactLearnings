import { useState } from "react";
import ListItem from "./ListItems/ListItem";
// import Form from "./Form";

/** const Products = () => {
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
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <Form
          item={item}
          onChangeInput={handleInput}
          onFormsubmission={submitForm}
        />
      </div>
      <div>
        <div>
          <ListItem data={item}></ListItem>
        </div>
      </div>
    </div>
  );
}; **/

const Products = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "Title of the Item 1",
      price: 450,
      discountedPrice: 340,
      thumbnail: "placeholder.png",
    },
    {
      id: 1,
      title: "Title of the Item 2",
      price: 540,
      discountedPrice: 440,
      thumbnail: "placeholder.png",
    },
    {
      id: 2,
      title: "Title of the Item 3",
      price: 520,
      discountedPrice: 420,
      thumbnail: "placeholder.png",
    },
    {
      id: 3,
      title: "Title of the Item 4",
      price: 510,
      discountedPrice: 410,
      thumbnail: "placeholder.png",
    },
  ]);

  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {/* <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem> */}
        {items.map((item) => {
          // console.log(item);
          return <ListItem data={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
