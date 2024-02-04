import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
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
  const [items, setItems] = useState([]);

  useEffect(() => {
    //   fetch(`https://react-learning-7c870-default-rtdb.firebaseio.com/items.json`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    axios
      .get(
        `https://react-learning-7c870-default-rtdb.firebaseio.com/items.json`
      )
      .then((res) => {
        const data = res.data;
        // console.log(data);
        const transformData = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setItems(transformData);
        // console.log(transformData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {/* <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem> */}
        {items.map((item) => {
          // console.log(item);
          return <ListItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
