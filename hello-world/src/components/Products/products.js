import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(
          `https://react-learning-7c870-default-rtdb.firebaseio.com/items.json`
        );
        const data = response.data;
        const transformData = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setItems(transformData);
      } catch (error) {
        console.log(error);
        alert("Some error occurred!");
      }
    }
    fetchItems();
  }, []);

  const updateItemTitle = async (itemId) => {
    console.log(`Item with Id: ${itemId}`);
    try {
      let title = `Update title #Item-${itemId}`;
      await axios.put(
        `https://react-learning-7c870-default-rtdb.firebaseio.com/items/${itemId}.json`,
        {
          title: title,
        }
      );
      let data = [...items];
      let index = data.findIndex((e) => e.id === itemId);
      data[index]["title"] = title;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.id}
              data={item}
              updateItemTitle={updateItemTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
