import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <Fragment>
      <div>
        <h1>Product component</h1>
        <ul>
          <li>
            <NavLink className="active" to={"/product/1"}>
              Product item 1
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to={"/product/2"}>
              Product item 2
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to={"/product/3"}>
              Product item 3
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to={"/product/4"}>
              Product item 4
            </NavLink>
          </li>
          <li>
            <NavLink className="active" to={"/product/5"}>
              Product item 5
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Product;
