import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPageCSS";
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
          <button className="btn btn-hero"> Login / Register</button>
        </div>
        <img src={main} alt="job search" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
