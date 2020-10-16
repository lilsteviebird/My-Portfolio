import React, { Component } from 'react';

import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import profilePic from '../images/ProfilePic.jpg';


class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col={6}>
                        <h2>Steven Li</h2>
                        <img 
                            src= {profilePic}
                            alt = "profile"
                            style={{height: '250px', borderRadius: '10px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Thank you so much for checking out my website! My name is Steven and I am currently a sophomore
                            studying Computer Science and Economics at the University of Rochester.
                            I am always looking to expand my horizon on all things software, so please feel 
                            free to reach out to me if there are any opportunities available! 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        steven.yuecheng.li@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;