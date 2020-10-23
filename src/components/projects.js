import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Snake Game Project</CardTitle>
            <CardText>
              React project code for a simple game of snake to play online! Simple animation and a reactive UI to view your score. 
            </CardText>
            <CardActions border>
              <a href="https://github.com/lilsteviebird/Simple-Snake-Game" rel = "noopener noferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://steven-li-simple-snake-game.herokuapp.com" rel = "noopener noferrer" target="_blank">
                <Button colored>Check it Out!</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Portfolio Project</CardTitle>
            <CardText>
              React project code for a simple website that displys my portfolio! Check it out and feel free to share!
            </CardText>
            <CardActions border>
              <a href="https://github.com/lilsteviebird/My-Portfolio" rel = "noopener noferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Calorie Tracker App</CardTitle>
            <CardText>
              React Native code to help Deerfield Academy students keep track of their calories from meals that are provided for by the school!
            </CardText>
            <CardActions border>
              <a href="https://github.com/lilsteviebird/DAEatz" rel = "noopener noferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;