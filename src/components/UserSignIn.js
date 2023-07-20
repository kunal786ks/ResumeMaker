import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { setId } from "../slice/idSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./rep.css";
export default function UserSignIn() {
  const dispatch = useDispatch();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const userPersistedData = localStorage.getItem("persist:user");
  const userState = JSON.parse(userPersistedData);
  const users = userState && userState.users ? userState.users : [];
  const usersData = JSON.parse(users);

  const getData = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = inpval;

    if (usersData && usersData.length > 0) {
      const userLogin = usersData.filter((el) => {
        return el.email === email && el.password === password;
      });

      if (userLogin.length > 0) {
        alert("you are logged in successFully");
        navigate("/resume1");
        const ids = userLogin[0].id;
        dispatch(setId(ids));
      } else {
        alert(`Invalid email or password`);
      }
    } else {
      alert("sign up please");
    }
  };
  return (
    <div className="root-container">
      <div
        className="shadow-4 container"
        style={{
          height: "500px",
          width: "500px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <h1
          className=" my-5"
          style={{
            color: "#8C9EFF",
            fontFamily: "monospace",
            fontWeight: "10px",
          }}
        >
          Wohhoo! Login Here{" "}
        </h1>

        <br />
        <form onSubmit={(e) => handleLogin(e)}>
          <MDBInput
            className="mb-4"
            type="email"
            id="form5Example2"
            label="Email address"
            name="email"
            onChange={getData}
            required
          />
          <MDBInput
            className="mb-4"
            id="form5Example1"
            label="Password"
            type="password"
            name="password"
            required
            onChange={getData}
          />
          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form5Example3"
            label="I have read and agree to the terms"
            defaultChecked
            required
          />
          <MDBBtn type="submit" block>
            Login
          </MDBBtn>
          <div className="text-center my-3">
            <p>
              Do Not Have Account ? <NavLink to="/signup">SignUp</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
