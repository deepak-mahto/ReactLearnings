import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div>
        <h1>Default message</h1>
        <NavLink to={"/product"}>Product</NavLink>
      </div>
    </Fragment>
  );
};

export default Home;
