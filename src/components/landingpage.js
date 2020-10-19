import React, { Component } from 'react';

import { Grid, Cell} from 'react-mdl';


import HeadShot from '../images/HeadShot.jpeg';

class Landing extends Component{
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <div>
                    <Grid className = "landing-grid">
                        <Cell col={12}>
                            <img 
                                src = {HeadShot}
                                className = "profile-img"
                                style = {{borderRadius: "15px"}}
                            />
                            <div className = "banner-text">
                                <h1>Software Developer</h1>
                                <hr />
                                <p>JavaScript | Java | React | React Native | Spring Boot | NodeJS | HTML/CSS</p>

                                <div className = "social-links">
                    
                                <a href="https://www.linkedin.com/in/steven-li-b4a6a1167/" rel = "noopener noferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/lilsteviebird" rel = "noopener noferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                </div>
                            </div>
                        </Cell>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default Landing;