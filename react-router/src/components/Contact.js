import { Fragment } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Fragment>
      <h1>Contact Page.</h1>
      <Link to={"/"}>Back to Home</Link>
    </Fragment>
  );
};

export default Contact;
