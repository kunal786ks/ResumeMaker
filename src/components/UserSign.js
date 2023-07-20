import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";
import { setId } from "../slice/idSlice";
function UserSign() {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    id: Math.floor(Math.random() * 1000),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, id } = inpval;
    if (!email.includes("@")) {
      alert("write proper email");
    } else if (password.length < 5) {
      alert("password must be greater than 5 characters");
    } else {
      dispatch(setId(id));
      dispatch(registerUser(inpval));
      navigate("/detail");
    }
  };
  return (
    <div  className="sign-container">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        width: "500px",
        backgroundColor:'white'
      }}
      className="shadow-4"
    >
      <div>
        <h3 className="signup-header my-3" style={{color:'grey',
        fontFamily:'monospace'
      }}>Welcome! SignUp</h3>
        <form className="my-5" onSubmit={handleSubmit}>
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form3Example1"
                label="First name"
                name="firstName"
                onChange={getdata}
                required
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form3Example2"
                label="Last name"
                name="lastName"
                onChange={getdata}
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBInput
            className="mb-4"
            type="email"
            id="form3Example3"
            label="Email address"
            name="email"
            onChange={getdata}
            required
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Password"
            name="password"
            onChange={getdata}
            required
          />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form3Example5"
            label="Subscribe to our App"
            defaultChecked
            required
          />

          <MDBBtn type="submit" className="mb-4" block>
            Sign in
          </MDBBtn>

          <div className="text-center my-4">
            <p>
              Already a member ? <NavLink to="/login">login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default UserSign;
