import { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <div>
        <h1>About Page.</h1>
        <Link to={"/"}>Back to Home</Link>
      </div>
    </Fragment>
  );
};

export default About;
