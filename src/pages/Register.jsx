import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPageCSS";

const initialState = {
  name: "",
  email: "",
  passwod: "",
  isUser: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const toggleMember = () => {
    setValues({ ...values, isUser: !values.isUser });
    console.log(values.isUser);
  };
  return (
    <Wrapper className="full-page">
      <form onSubmit={onSubmit} className="form">
        <Logo />
        <h3>{values.isUser ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isUser && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          ></FormRow>
        )}

        {/*email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        ></FormRow>
        {/*password field*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        ></FormRow>
        <button className="btn btn-block" type="submit">
          submit
        </button>
        <p>
          {values.isUser ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isUser ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
