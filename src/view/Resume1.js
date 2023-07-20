import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EditIcon from '@mui/icons-material/Edit';


const Resume1 = () => {
  const reportTemplateRef = useRef(null);
  //accessing id from the state.....
  const id = useSelector((state) => state.id.userId);
  console.log("id present in the state", id);

  //accessing the localstorage.....
  const productPersistedData = localStorage.getItem("persist:detail");
  const corePersistedData = localStorage.getItem("persist:core");
  const hobbiePersistedData = localStorage.getItem("persist:hobbie");
  const edPerisitedData = localStorage.getItem('persist:ed');

  // Parse the JSON data
  const detailState = JSON.parse(productPersistedData);
  const coreState = JSON.parse(corePersistedData);
  const hobbieState = JSON.parse(hobbiePersistedData);
  const edState = JSON.parse(edPerisitedData);


  // Access the info that stored by the user
  const details = detailState && detailState.details ? detailState.details : [];
  const coreSkills = coreState && coreState.core ? coreState.core : [];
  const hobbies = hobbieState && hobbieState.hobbies ? hobbieState.hobbies : [];
  const education = edState && edState.eds ? edState.eds : [];


  // accessing the personal details.....
  const detailsData = JSON.parse(details);
  const userDetails = detailsData.filter((el) => {
    return el.id === id;
  });
  // console.log('these are the personal details',userDetails)

  //accessing the core skills details...
  const coreData = JSON.parse(coreSkills);
  const coreDetails = coreData.filter((el) => {
    return el.id === id;
  });
  // console.log('core skillls are ....',coreDetails);
  // console.log('these are the personal details',coreSkills)

  //accessing the hobbies details....
  const hobbieData = JSON.parse(hobbies);
  const hobbieDetails = hobbieData.filter((el) => {
    return el.id === id;
  });
  console.log("these are the personal details", hobbieDetails);

  //acessing the educational details

  const EducationalData = JSON.parse(education)
  const edsDetails = EducationalData.filter((el) => {
    return el.id === id;
  })





  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save('document');
      },
    });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavLink to='/resume1'>
        <p style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          fontSize: '20px'
        }}><b>Resume1 </b></p>
      </NavLink>
      <NavLink to='/resume2'>
        <p className="mx-4" style={{
          position: 'absolute',
          top: '10px',
          left: '100px',
          fontSize: '20px'
        }}><b>Resume2 </b></p>
      </NavLink>

      <NavLink to='/resume3'>
        <p className="mx-4" style={{
          position: 'absolute',
          top: '10px',
          left: '220px',
          fontSize: '20px'
        }}><b>Resume3 </b></p>
      </NavLink>
      <div style={{ width: '700px' }}>
        <h1 style={{ fontFamily: 'monospace', color: 'blue-grey' }}>
          Hello {userDetails[0]?.firstName} this is Your resume{" "}
        </h1>

        <div className="shadow-4 my-5" id='report' ref={reportTemplateRef} style={{ border: '1px solid black' }}>
          <div>
            <h3>Personal Details</h3>
            <div className="shadow-5 my-4">
              <b>Name : </b>
              {userDetails[0]?.firstName} {userDetails[0]?.lastName}
              <br />
              <b>Comapny : </b>
              {userDetails[0]?.companyName}
              <br />
              <b>Current address : </b>
              {userDetails[0]?.address}
              <br />
              <b>Email : </b>
              {userDetails[0]?.email}
              <br />
              <b>Phone No. : </b> {userDetails[0]?.phone}
            </div>
            <h3>Education Details</h3>
            <div className="shadow-5 my-4">
              <b>10th Marks : </b>
              {edsDetails[0]?.tenthMarks}
              <br />
              <b>Year Of Passing : </b>
              {edsDetails[0]?.tenthYear}
              <br />
              <b>School Name : </b>
              {edsDetails[0]?.tenthSchool}
              <br />
              <hr></hr>
              {/* 12th details */}
              <b>12th Marks : </b>
              {edsDetails[0]?.tweMarks}
              <br />
              <b>Year Of Passing : </b>
              {edsDetails[0]?.tweYear}
              <br />
              <b>School Name : </b>
              {edsDetails[0]?.tweSchool}
              <br />
              <hr></hr>
              {/* Graduation details  */}
              <b>Graduation Marks : </b>
              {edsDetails[0]?.gMarks}
              <br />
              <b>Year Of Passing : </b>
              {edsDetails[0]?.gYear}
              <br />
              <b>College/University Name : </b>
              {edsDetails[0]?.gName}
              <br />
            </div>
            <h3>Core Skills</h3>
            <div className="shadow-5 my-4">
              <b>Language Known : </b>
              {coreDetails[0]?.language}
              <br />
              <b>Courses : </b>
              {coreDetails[0]?.course}
              <br />
              <b>Certifications : </b>
              {coreDetails[0]?.certification}
              <br />
              <b>Project : </b> {coreDetails[0]?.project}
              <br />
              <b>Project Description : </b> {coreDetails[0]?.desc}
            </div>
            <h3>Hobbies</h3>
            <div className="shadow-5 my-4">
              <b>Writing : </b>
              {hobbieDetails[0]?.writing}
              <br />
              <b>Reading : </b>
              {hobbieDetails[0]?.reading}
              <br />
              <b>Indoor Games : </b>
              {hobbieDetails[0]?.indoor}
              <br />
              <b>Outdoor Games : </b> {hobbieDetails[0]?.outdoor}
              <br />
              <b>Your Hobby : </b> {hobbieDetails[0]?.yourhobby}
            </div>
          </div>
        </div>

      </div>

      <NavLink to="/login" style={{ float: 'right' }}>
        <button style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}><LogoutIcon></LogoutIcon></button>
      </NavLink>
      <NavLink to="/detail" style={{ float: 'right' }}>
        <button style={{
          position: 'absolute',
          top: '10px',
          right: '50px',
        }}><EditIcon></EditIcon></button>
      </NavLink>
      <button onClick={handleGeneratePdf} style={{
        position: 'absolute',
        top: '10px',
        right: '90px',
      }}><FileDownloadIcon></FileDownloadIcon></button>
     
    </div>
  );
};

export default Resume1;
