import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>





        <Grid>
          <Cell className="resume_background" col={3}></Cell>


          <Cell className="resume-md-col" col={6}>
          <h2 style={{paddingTop: '2em'}}>James Clark</h2>
            <h4 style={{color: 'white'}}>Data Scientist/ Developer</h4>
            <div className="social-links">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jamessandroclark/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
            </div>

            <h5>Email</h5>
            <p>sandro93@ucla.edu</p>
            <hr style={{borderTop: '3px solid #833fb2'}} />

            <h2>Education</h2>
            <hr style={{borderTop: '3px solid #833fb2'}} />



            <Education
              startYear={2012}
              endYear={2014}
              schoolName="Butte College"
              schoolDescription="I studied for two years at my local JC where I received a Associates Degree in Social Behavioral Sciences"
               />

               <Education
                 startYear={2014}
                 endYear={2017}
                 schoolName="University of California Los Angeles"
                 schoolDescription="While attending this world class institution I studied History and Political Science, receiving my Bachelors Degree in History."
                  />



            <Education
              startYear={"April 2019"}
              endYear={"August 2019"}
              schoolName="Galvanize: Data Science Immersive"
              schoolDescription="This coding bootcamp exposed me to a variety of Data Science/AI techniques and processes, with my case study being a NLP focused project utilizing sentiment analysis, stylometry, and topic modeling "
            />
            <hr style={{ borderTop: '3px solid #833fb2' }} />

              <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2019}
              jobName="Work Experience Prior to Tech"
              jobDescription="My work experience prior to learning programming was varied. Some relevant work experience included working under a Python developer where I was first exposed to OOP and ML concepts."
              />

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Data Scientist Internship at Lincode"
                jobDescription="During this 8 month internship I gained work experience working a Computer Vision startup in Silicon Valley."
                />
              <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2 >Skills</h2>
      <div className="social-links">

          {/* html5 */}
           <i className="fa fa-html5" aria-hidden="true" />

          {/* css3 */}
         
          <i className="fa fa-css3" aria-hidden="true" />


          {/* python */}

          <i className="fab fa-python"  aria-hidden="true" />


          {/* javascript */}
          <i className="fab fa-js-square"  aria-hidden="true" />

          {/* react */}
          <i className="fab fa-react"  aria-hidden="true" />


          {/* sql */}
          <i className="fas fa-database"  aria-hidden="true" />
          
        
        

        </div>

          </Cell>
          <Cell className="resume_background" col={3}></Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
