import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPageCSS";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>we can't seem the page you are looking for</p>
        <Link to="/">back to home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
