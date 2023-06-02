

import React from "react";
import ReactDom from 'react-dom/client';
import Banner from "./components/Banner";
import css from './index.css'

import Detail from "./components/Detail";

import ResumeDataLeft  from './data/ResumeDataLeft';
import ResumeData from './data/ResumeData';
import FullName from "./components/FullName";
import Summary from "./components/Summary";
import Project from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Certificate from "./components/Certificate";
import Education from "./components/Education";

import  'bulma/css/bulma.min.css';


const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];
const workExperiences = ["Company  1", "Company 2", "Company 3", "Company 4"];

const detailsInit = ["details1", "details2", "details3"];
const detailsProtoType = (
    <ui>
        {detailsInit.map((detail) => (
            <li>{detail}</li>
        ))}
    </ui>
);



function App() {
    return (
<div className="body"> 
        <div>
            <section class="hero is-info has-background-black">
                <div class="hero-body">
                    <p class="title">
                    <FullName fullName={ResumeData.fullName} />
                    </p>
                    <p class="subtitle">
                    <Summary summary={ResumeData.summary} />    
                    </p>
                </div>
            </section>

        
        <div className="container">  

            <div class="columns">
                          
                <div className="column is-one-third">
                    
              
                    <section>
                        <Detail objectData ={ResumeDataLeft.contact}/>
                    </section>
                    <section>
                        <Detail objectData={ResumeDataLeft.keySkills} />
                    </section>

                    <section>
                        <Detail objectData={ResumeDataLeft.additionalSkills} />
                    </section>

                    <section>
                        <Detail objectData={ResumeDataLeft.languages} />
                    </section>

                    <section>
                        <Detail objectData={ResumeDataLeft.interests} />
                    </section>

                    {/* <Certificate  certificateData={ResumeData.certificates}/> */}
                    
                    <Education educationData={ResumeDataLeft.education} />
                </div>  
           

                <div className="column"> 

                    <Project projectData={ResumeData.projects} />

                    <WorkExperience  workExperienceData={ResumeData.workExperience}/>

                

                </div>
            </div> 
        </div>
                
            
        </div>
</div>
    
    
    );
}

export default App;
