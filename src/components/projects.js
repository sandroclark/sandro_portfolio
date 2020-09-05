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
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i1.wp.com/canopylab.com/wp-content/uploads/2019/11/shutterstock_1455391502-2.jpg?ssl=1) center / cover'}} >Venezuelan Interference</CardTitle>
            <CardText>
              The negative consequences of adversarial machine learning has become more apparent with the recent interference into the U.S election by Russia. This project utilizes Twitter's Dataset to examine the role and scope of Venezuelan interference in the '16 and '18 elections. 
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Venezuelan-Intrusion"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://techcrunch.com/wp-content/uploads/2016/05/robot-customer-service.png?w=1390&crop=1) center / cover'}} >Covid Bot</CardTitle>
            <CardText>
              This is my first internet deployed AI: a chatbot. This project  was the bridge for me between front end development and AI. Tech Stack: Flask, Sql-alchemy, Chatterbot Corpus, Heroku
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Quarantine_Bot"><Button colored>GitHub</Button></a>
              <a href="https://quarantine-bot.herokuapp.com"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          { <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.vecteezy.com/system/resources/previews/000/238/640/original/it-s-jamming-time-vector.jpg) center / cover'}} >API Application #3</CardTitle>
            <CardText>
              A web application, built with React, that allows users to search the Spotify library, create a custom playlist, and then save the playlist to their Spotify accounts. Tech Stack: Html, CSS, React, Spotify API
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/wejammming"><Button colored>GitHub</Button></a>
              <a href="http://jammming-out.surge.sh/"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> }
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i1.wp.com/canopylab.com/wp-content/uploads/2019/11/shutterstock_1455391502-2.jpg?ssl=1) center / cover' }} >Venezuelan Interference</CardTitle>
            <CardText>
              The negative consequences of adversarial machine learning has become more apparent with the recent interference into the U.S election by Russia. This project utilizes Twitter's Dataset to examine the role and scope of Venezuelan interference in the '16 and '18 elections.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Venezuelan-Intrusion"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i1.wp.com/canopylab.com/wp-content/uploads/2019/11/shutterstock_1455391502-2.jpg?ssl=1) center / cover' }} >Venezuelan Interference</CardTitle>
            <CardText>
              The negative consequences of adversarial machine learning has become more apparent with the recent interference into the U.S election by Russia. This project utilizes Twitter's Dataset to examine the role and scope of Venezuelan interference in the '16 and '18 elections.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Venezuelan-Intrusion"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://techcrunch.com/wp-content/uploads/2016/05/robot-customer-service.png?w=1390&crop=1) center / cover' }} >Covid Bot</CardTitle>
            <CardText>
              This is my first internet deployed AI: a chatbot. This project  was the bridge for me between front end development and AI.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Quarantine_Bot"><Button colored>GitHub</Button></a>
              <a href="https://quarantine-bot.herokuapp.com"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://techcrunch.com/wp-content/uploads/2016/05/robot-customer-service.png?w=1390&crop=1) center / cover' }} >Covid Bot</CardTitle>
            <CardText>
              This is my first internet deployed AI: a chatbot. This project  was the bridge for me between front end development and AI.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Quarantine_Bot"><Button colored>GitHub</Button></a>
              <a href="https://quarantine-bot.herokuapp.com"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          { <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://static.vecteezy.com/system/resources/previews/000/238/640/original/it-s-jamming-time-vector.jpg) center / cover'}} >API Application #3</CardTitle>
            <CardText>
              A web application, built with React, that allows users to search the Spotify library, create a custom playlist, and then save the playlist to their Spotify accounts. Tech Stack: Html, CSS, React, Spotify API
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/wejammming"><Button colored>GitHub</Button></a>
              <a href="http://jammming-out.surge.sh/"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> }
   
        </div>
      )
    }


  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Data Science</Tab>
          <Tab>NLP</Tab>
          <Tab>AI</Tab>
          <Tab>Web Development</Tab>
        </Tabs>


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
