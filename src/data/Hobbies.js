import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { addHobbies, updateHobbies } from "../slice/hobbieSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Hobbies() {
  const id = useSelector((state) => state.id.userId);
  const Hobby=useSelector(state=>state.hobbie.hobbies);

  const [inpval, setInpval] = useState({
    id: id,
    writing: "",
    reading: "",
    indoor: "",
    outdoor: "",
    yourhobby: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    const HobbyIndex=Hobby.findIndex(hobbies=>hobbies.id===id);
    if(HobbyIndex===-1){
      dispatch(addHobbies(inpval));
    }
    else{
      dispatch(updateHobbies(inpval));
    }
    
  };

  return (
    <>
      <h1>
        <u>Add Your Hobbies To Your Resume</u>
      </h1>
      <div>
        <div
          className="shadow-4 container my-5"
          style={{
            height: "500px",
            weight: "500px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example3"
              onChange={getdata}
              label="Do you have Writing as Hobby?"
              name="writing"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="Do you have Reading as Hobby?"
              name="reading"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              onChange={getdata}
              label="Do you have Indoor Hobby?"
              name="indoor"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="tel"
              id="form6Example6"
              onChange={getdata}
              label="Do you have Outdoor Hobby?"
              name="outdoor"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form6Example7"
              onChange={getdata}
              rows={4}
              label="Add Your Hobby here"
              name="yourhobby"
            />
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form6Example8"
              label="Are You sure to add?"
              defaultChecked
            />

            <MDBBtn className="mb-4" type="submit">
              Add Details
            </MDBBtn>
          </form>
          <NavLink to="/resume1">
            <p>Generate Your Resume</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
