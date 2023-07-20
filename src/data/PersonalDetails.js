import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";
import { addDetails, updateDetails } from "../slice/personalSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillFastForward } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
export default function PersonalDetails() {
  const navigate = useNavigate();
  const id = useSelector((state) => state.id.userId);
  console.log(id);


  const UserDetails=useSelector(state=>state.detail.details);
  console.log(UserDetails);
  const [inpval, setInpval] = useState({
    id: id,
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const DetailIndex=UserDetails.findIndex(detail=>detail.id===id);
    if(DetailIndex===-1){
      dispatch(addDetails(inpval));
      navigate("/ed");
    }
    else{
      dispatch(updateDetails(inpval));
      navigate('/ed');
    }
  };
  return (
    <>
      <h1>
        <u>Add Your Personal Details To Your resume</u>
      </h1>
      <div>
        <div
          className="shadow-4 container my-5"
          style={{
            height: "500px",
            weight: "500px",
          }}
        >
          <form onSubmit={(e)=>handleSubmit(e)}>
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
              label="Designation"
              name="companyName"
            />
            <MDBTextArea
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
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form6Example8"
              label="Are You sure to add?"
              defaultChecked
            />

            <MDBBtn className="mb-4" type="submit" >
              Add Details
            </MDBBtn>
          </form>
          <div>
            <NavLink to="/ed">
              {" "}
              <button style={{ float: "right" }}>
                <AiFillFastForward />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
