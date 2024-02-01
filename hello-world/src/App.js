import React from "react";

const App = () => {
  // return <div>Hello, World!</div>;
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello, World!")
  );
};

export default App;
