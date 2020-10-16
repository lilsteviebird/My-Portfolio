import React, { useState } from 'react';

import './App.css';

import { HeaderRow, HeaderTabs, Tab, Layout, Header, Drawer, Content } from 'react-mdl';

import Main from './components/main';

import { Link } from 'react-router-dom';

import ContactPage from './components/contact';
import LandingPage from './components/landingpage';
import ResumePage from './components/resume';
import ProjectPage from './components/projects'

function App() {
    const [tab, setTab] = useState(0);

    //silly way to use useState
    const [project, setProject] = useState(false);
    const [resume, setResume] = useState(false);
    const [contact, setContact] = useState(false);

    //landing page check
    const [started, setStarted] = useState(true);

    
  return (
        <div className = "demo-big-content" style={{height: '300px', position: 'relative'}}>
            <Layout fixedHeader fixedTabs>
                <Header className = "header-color">
                    <HeaderRow title="Title" className = "header-color"/>
                    <HeaderTabs className = "header-color" ripple activeTab={1} 
                        onChange={(tabId) => {if(tabId == 0){
                        setProject(true); setContact(false); setResume(false); setStarted(false);
                    }else if(tabId == 1){
                        setProject(false); setContact(true); setResume(false); setStarted(false); 
                    }else if(tabId == 2){
                        setProject(false); setContact(false); setResume(true); setStarted(false);
                    }
                    }}>
                        <Tab>Projects</Tab>
                        <Tab>About Me / Contact</Tab>
                        <Tab>Resume</Tab>
                    </HeaderTabs>
                </Header>
                <Drawer title="Title" />
                <Content>
                    { started ? <LandingPage/> : null}
                    { project ? <ProjectPage/> : null }
                    { resume ? <ResumePage/> : null }
                    { contact ? <ContactPage/> : null }
                </Content>
            </Layout>
        </div>
  );
}

export default App;
