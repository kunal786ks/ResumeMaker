import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EditIcon from '@mui/icons-material/Edit';
const Resume3 = () => {
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
        <div >
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
                    <h1 style={{ fontFamily: 'monospace', color: 'red' }}>
                        Hello {userDetails[0]?.firstName} this is Your resume{" "}
                    </h1>
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="my-6">
                <div style={{ border: '1px solid black', width: '700px',backgroundColor:'#F5F5F5'}} ref={reportTemplateRef}>
                    <div style={{ height: '130px', justifyContent: 'center', alignItems: 'center',border:'1px solid black' }}>
                        <p>{userDetails[0]?.firstName} {userDetails[0]?.lastName}<br />
                            <span>{userDetails[0]?.companyName}</span><br></br>
                            <span>{userDetails[0]?.email}</span><br></br>
                            <span>{userDetails[0]?.phone}</span><br></br>
                            <span>{userDetails[0]?.address}</span>
                        </p>
                    </div>
                    <div style={{display:"flex"}} className="my-5">
                        <div style={{flexGrow: "1",border:'1px solid black'}} className="mx-2">
                            <h3><u>Education</u></h3>
                            <h5>10th Marks</h5><br></br>
                            <span>{edsDetails[0]?.tenthMarks}</span><br></br>
                            <span>{edsDetails[0]?.tenthYear}</span><br></br>
                            <span>{edsDetails[0]?.tenthSchool}</span><br></br>
                            <hr/>
                            <h5 className="my-3">12th Marks</h5><br></br>
                            <span>{edsDetails[0]?.tweMarks} </span><br></br>
                            <span>{edsDetails[0]?.tweYear}</span><br></br>
                            <span>{edsDetails[0]?.tweSchool}</span><br></br>
                            <hr/>
                            <h5 className="my-3">Graduation</h5><br></br>
                            <span>{edsDetails[0]?.gMarks} </span><br></br>
                            <span>{edsDetails[0]?.gYear}</span><br></br>
                            <span>{edsDetails[0]?.gName}</span><br></br>
                        </div>
                        <div style={{flexGrow:'1'}} className="mx-2">
                           <div style={{height:'300px',border:'1px solid black'}}>
                                <h3><u>Core Skills</u></h3>
                                <span><b>Programing :{coreDetails[0]?.language}</b></span>
                                    <br></br>
                                <span>Courses : {coreDetails[0]?.course}</span>
                                <br></br>
                                <span>Certifications : {coreDetails[0]?.certification}</span>
                                <br></br>
                                <span>Project : {coreDetails[0]?.project}</span>
                           </div>
                           <div className="shadow-5 my-3" style={{height:'190px',border:'1px solid black'}}> 
                            <h3><u>Hobbies</u></h3>
                            <span>My Interests : {hobbieDetails[0]?.yourhobby}</span>
                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resume3;
