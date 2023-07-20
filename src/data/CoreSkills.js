import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { AiFillFastForward } from "react-icons/ai";
import { addCoreSkills, updateCore } from "../slice/coreSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
export default function CoreSkills() {
  const navigate = useNavigate();
  const id = useSelector((state) => state.id.userId);
  const CoreData=useSelector(state=>state.core.core);
  console.log(CoreData);
  const [inpval, setInpval] = useState({
    id: id,
    language: "",
    course: "",
    certification: "",
    project: "",
    desc: "",
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
    const CoreIndex=CoreData.findIndex(core=>core.id===id);
    if(CoreIndex===-1){
      dispatch(addCoreSkills(inpval));
      navigate("/hobbie");
    }else{
      dispatch(updateCore(inpval));
      navigate('/hobbie')
    }
  };
  return (
    <>
      <h1>
        <u>Add Your Core Skills To Your resume</u>
      </h1>
      <div>
        <div
          className="shadow-4 container my-5"
          style={{
            height: "500px",
            weight: "500px",
          }}
        >
          <form>
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example3"
              onChange={getdata}
              label="Languages Know"
              name="language"
            />
            <MDBInput
              wrapperClass="mb-4"
              id="form6Example4"
              onChange={getdata}
              label="Courses Undertaken"
              name="course"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="text"
              id="form6Example5"
              onChange={getdata}
              label="certification"
              name="certification"
            />
            <MDBInput
              wrapperClass="mb-4"
              type="tel"
              id="form6Example6"
              onChange={getdata}
              label="Projects Done"
              name="project"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form6Example7"
              onChange={getdata}
              rows={4}
              label="Project information"
              name="desc"
            />
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form6Example8"
              label="Are You sure to add?"
              defaultChecked
            />

            <MDBBtn className="mb-4" type="submit" onClick={handleSubmit}>
              Add Details
            </MDBBtn>
          </form>
          <NavLink to="/hobbie">
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
