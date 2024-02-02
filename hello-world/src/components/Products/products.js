import { useState } from "react";
import ListItem from "./ListItems/ListItem";
import Form from "./Form";

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
};

export default Products;
