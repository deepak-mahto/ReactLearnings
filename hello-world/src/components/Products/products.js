import ListItem from "./ListItems/ListItem";

const items = [
  {
    id: 1,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item 1",
    thumbnail: "placeholder.png",
  },
  {
    id: 2,
    discountedPrice: 320,
    price: 40,
    title: "Title of the Item 2",
    thumbnail: "placeholder.png",
  },
  {
    id: 3,
    discountedPrice: 340,
    price: 400,
    title: "Title of the Item 3",
    thumbnail: "placeholder.png",
  },
  {
    id: 3,
    discountedPrice: 380,
    price: 480,
    title: "Title of the Item 4",
    thumbnail: "placeholder.png",
  },
];

const Products = () => {
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem data={items[0]}></ListItem>
        <ListItem data={items[1]}></ListItem>
        <ListItem data={items[2]}></ListItem>
        <ListItem data={items[3]}></ListItem>
      </div>
    </div>
  );
};

export default Products;
