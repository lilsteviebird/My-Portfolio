import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';


import MyPopup from './mypopup';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import ProfilePic from '../images/ProfilePic.jpg';


class Resume extends Component{
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    };
  }

  togglePop = () =>{
    this.setState({
      seen: !this.state.seen
    })
  }

    render(){
        return(
            <div className = {this.state.seen ? 'resume-bodyfaded' : 'resume-body'}>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src={ProfilePic}
                    style={{height: '350px', borderRadius: '15px'}}
                     />
                </div>
    
                <h2>Steven Li</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>Hi, thank you so much for checking out my website. To summarize, I am currently a sophomore at the University of Rochester
                   double majoring in Computer Science and Economics. I've been very fortunate enough to have held some experience in the tech 
                   industry already and I am looking forward to whatever challenges that lie ahead of me! Please checkout the "sparknotes"
                   of my resume on the right, and if you're looking for more information, my full resume can be viewed with the button below!
                </p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                  <MyPopup />
                <h5>Web</h5>
                <a href="https://steven-li-portfolio.herokuapp.com/" rel = "noopener noferrer" target="_blank">
                  <p>https://steven-li-portfolio.herokuapp.com/</p>
                </a>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education
                  startYear={2019}
                  endYear={2023}
                  schoolName="University of Rochester"
                   />
    
                   <Education
                     startYear={2015}
                     endYear={2019}
                     schoolName="Deerfield Academy"
                      />
                    <hr style={{borderTop: '3px solid #e22947'}} />
    
                  <h2>Experience</h2>
    
                <Experience
                  startYear={2020}
                  timeLength={'4 months'}
                  jobName="Full Stack Internship"
                  jobDescription="Worked @ S&C Electric on a team to develop a desktop application using Spring Boot with Java and React.js to monitor electrical devices"
                  />
    
                  <Experience
                    startYear={2018}
                    timeLength={'2 months'}
                    jobName="Software Project Internship"
                    jobDescription="Worked with the quality assurance team and helped discover over 50 bugs, and aided with the release of project in late June"
                    />
                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Languages</h2>
                  <Skills
                    skill="Java"
                    progress={90}
                    />
                  <Skills
                    skill="JavaScript"
                    progress={80}
                    />
                  <Skills
                    skill="Objective-C"
                    progress={70}
                    />
                  <Skills
                    skill="C *learning right now!*"
                    progress={40}
                    />
                  <Skills
                    skill="HTML/CSS"
                    progress={80}
                    />
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Resume;