import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPageCSS";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span className="">Tracker</span> Application
          </h1>
          <p>
            there is fjvn ofv onbfo lknvpff kfnbpd dnodofndf dfinfdpipe gnifpnf
            ipngkjgjkbj ifnbkn df ffjoipfb efjonf ipfnfnofn
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job search" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
