import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { registerUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";
export default function UserDetails() {
  const [inpval, setInpval] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    info: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(registerUser(inpval));
  };
  return (
    <>
      <h1>Add Your data to make resume</h1>
      <div>
        <div
          className="shadow-4 container my-5"
          style={{
            height: "500px",
            weight: "500px",
          }}
        >
          <form>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  id="form6Example1"
                  onChange={getdata}
                  label="First name"
                  name="firstName"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  id="form6Example2"
                  onChange={getdata}
                  label="Last name"
                  name="lastName"
                />
              </MDBCol>
            </MDBRow>
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example3"
              onChange={getdata}
              label="Company name"
              name="companyName"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="Address"
              name="address"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="email"
              id="form6Example5"
              onChange={getdata}
              label="Email"
              name="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="tel"
              id="form6Example6"
              onChange={getdata}
              label="Phone"
              name="phone"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form6Example7"
              onChange={getdata}
              rows={4}
              label="Additional information"
              name="info"
            />
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form6Example8"
              label="Create an account?"
              defaultChecked
            />

            <MDBBtn className="mb-4" type="submit" onClick={handleSubmit}>
              Place order
            </MDBBtn>
          </form>
        </div>
      </div>
    </>
  );
}
