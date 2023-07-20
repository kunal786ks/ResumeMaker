import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './Resume2.css'
import EditIcon from '@mui/icons-material/Edit';

const Resume2 = () => {
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


    // Accessing the info that stored by the user
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




    //downloding the pdf 
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
            <div style={{width:'700px'}}>
      <h1 style={{fontFamily:'monospace',color:'#2F4F4F'}}>
        Hello {userDetails[0]?.firstName} this is Your resume{" "}
      </h1>
            <div class="container" ref={reportTemplateRef} style={{border:'1px solid black'}}y>
                <div class="header">
                    <div class="full-name">
                        <span class="first-name">{userDetails[0]?.firstName} </span>
                        <span class="last-name">{userDetails[0]?.lastName}</span>
                    </div>
                    <div class="contact-info">
                        <span class="email">Email: </span>
                        <span class="email-val"> {userDetails[0]?.email}</span>
                        <span class="separator"></span>
                        <span class="phone">Phone: </span>
                        <span class="phone-val">{userDetails[0]?.phone}</span>
                    </div>

                    <div class="about">
                        <span class="position">{userDetails[0]?.companyName}</span>
                        <span class="desc">
                            I am a {userDetails[0]?.companyName} with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.
                        </span>
                    </div>
                </div>
                <div class="details">
                    
                    <div class="section">
                        <div class="section__title">Education</div>
                        <div class="section__list">
                            <div class="section__list-item">
                                <div class="left">
                                    <div class="name">10<sup>th Class</sup></div>
                                    <div class="addr">{edsDetails[0]?.tenthMarks}</div>
                                    <div class="duration">{edsDetails[0]?.tenthYear}</div>
                                    <div class="duration">{edsDetails[0]?.tenthSchool}</div>
                                </div>
                                <div class="right">
                                    <div class="name">12<sup>th Class</sup></div>
                                    <div class="desc">{edsDetails[0]?.tweMarks}%</div>
                                    <div class="desc">{edsDetails[0]?.tweYear}</div>
                                    <div class="desc">{edsDetails[0]?.tweSchool}</div>
                                </div>
                            </div>
                            <div class="section__list-item">
                                <div class="left">
                                    <div class="name">Graduation </div>
                                    <div class="addr">{edsDetails[0]?.gMarks}</div>
                                    <div class="duration">{edsDetails[0]?.gYear}</div>
                                    <div class="duration">{edsDetails[0]?.gName}</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="section">
                        <div class="section__title">Projects</div>
                        <div class="section__list">
                            <div class="section__list-item">
                                <div class="name">{coreDetails[0]?.project}</div>
                                <div class="text">{coreDetails[0]?.desc}</div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="section__title">Skills</div>
                        <div class="skills">
                            <div class="skills__item">
                            {coreDetails[0]?.language}
                            </div>

                        </div> 
                    </div>
                    <div class="section">
                        <div class="section__title">
                            Interests
                        </div>
                        <div class="section__list">
                            <div class="section__list-item">
                            {hobbieDetails[0]?.yourhobby}
                            </div>
                        </div>
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
    </div >
  );
};

export default Resume2;
