import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { AiFillFastForward } from "react-icons/ai";
import { addEducation, updateEducation } from "../slice/edSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
export default function EdDetails() {
  const navigate = useNavigate();
  const id = useSelector((state) => state.id.userId);

  const EdDetails=useSelector(state=>state.ed.eds);

  const [inpval, setInpval] = useState({
    id: id,
    tenthMarks: "",
    tenthSchool: "",
    tweMarks:'',
    tweSchool:'',
    tweYear:'',
    gMarks:'',
    gName:'',
    gYear:''
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
    const edIndex=EdDetails.findIndex(eds=>eds.id===id);
    if(edIndex===-1){
      dispatch(addEducation(inpval));
    navigate("/core");
    }
    else{
      dispatch(updateEducation(inpval));
      navigate('/core')
    }
    
  };
  return (
    <>
      <h1>
        <u>Add Your Educational Details To Your resume</u>
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
            <h4>Tenth Class Details</h4>
          <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              onChange={getdata}
              label="CGPA/Percentage"
              name="tenthMarks"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="School Name"
              name="tenthSchool"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example6"
              onChange={getdata}
              label="Year"
              name="tenthYear"
            />
           <h4>Tweleth Class Details</h4>
          <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              onChange={getdata}
              label="Percentage"
              name="tweMarks"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="School Name"
              name="tweSchool"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example6"
              onChange={getdata}
              label="Year"
              name="tweYear"
            />
             <h4>Graduation Details</h4>
          <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              onChange={getdata}
              label="Percentage/CGPA"
              name="gMarks"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="College / University Name"
              name="gName"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example6"
              onChange={getdata}
              label="Year"
              name="gYear"
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
          <NavLink to="/core">
            {" "}
            <button style={{ float: "right" }}>
              <AiFillFastForward />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
