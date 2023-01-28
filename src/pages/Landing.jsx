import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="job tracker logo" className="logo" />
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

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
`;

export default Landing;
