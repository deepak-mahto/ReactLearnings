import ListItem from "./components/ListItem";

const App = () => {
  return (
    <div>
      <ListItem
        data={{
          discountedPrice: 340,
          price: 450,
          title: "Title of the Item 1",
          thumbnail: "placeholder.png",
        }}
      ></ListItem>
      <ListItem
        data={{
          discountedPrice: 320,
          price: 400,
          title: "Title of the Item 2",
          thumbnail: "placeholder.png",
        }}
      ></ListItem>
    </div>
  );
};

export default App;
