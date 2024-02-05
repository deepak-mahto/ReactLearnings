import { useEffect, useState } from "react";
import ListItem from "./Listitems/ListItem";
import axios from "axios";
import Loader from "./UI/Loader";

const Products = ({ onAddItem, onRemoveItem }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const [presentItems, setPresentItems] = useState([]);

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
        // setLoader(false);
        setItems(transformData);
      } catch (error) {
        setLoader(false);
        // console.log(error);
        alert("Some error occurred!");
      } finally {
        setLoader(false);
      }
    }
    fetchItems();
  }, []);

  const updateItemTitle = async (itemId) => {
    console.log(`Item with Id: ${itemId}`);
    try {
      let title = `Update title #Item-${itemId}`;
      await axios.patch(
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

  const handleAddItem = (id) => {
    // console.log(id);
    if (presentItems.indexOf(id) > -1) {
      return;
    }
    onAddItem();
  };

  const handleRemoveItem = (id) => {
    let index = presentItems.indexOf(id);
    if (index > -1) {
      let items = [...presentItems];
      items.splice(index, 1);
      setPresentItems(...items);
      onRemoveItem();
    }
    // console.log(id);
  };

  return (
    <>
      <div className={"product-list"}>
        <div className={"product-list--wrapper"}>
          {items.map((item) => {
            return (
              <ListItem
                onAdd={handleAddItem}
                onRemove={handleRemoveItem}
                key={item.id}
                data={item}
                updateItemTitle={updateItemTitle}
              />
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
