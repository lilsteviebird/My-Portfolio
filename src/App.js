import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Button } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Steven Li's Profolio!</Link>} scroll>
            <Navigation>
                <Link to="/resume" style ={{textDecoration:'none', height: '100%', width: '100%'}}><Button style ={{color: 'white',height: '100%', width: '100%'}}ripple>Resume</Button></Link>
                <Link to="/projects" style ={{textDecoration:'none', height: '100%', width: '100%'}}><Button style ={{color: 'white',height: '100%', width: '100%'}} ripple>Projects</Button></Link>
                <Link to="/contact" style ={{textDecoration:'none', height: '100%', width: '100%'}}><Button style ={{color: 'white',height: '100%', width: '100%'}} ripple>Contact</Button></Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Drawer Links!</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;