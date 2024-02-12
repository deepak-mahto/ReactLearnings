import { Fragment } from "react";
import { Link } from "react-router-dom";

const Nevigation = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nevigation;
