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
            <CardTitle style={{ color: '#333', height: '176px', background: 'url(https://static.vecteezy.com/system/resources/previews/000/238/640/original/it-s-jamming-time-vector.jpg) center / cover'}} >Spotify API App </CardTitle>
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

          {/* Project 4*/}
          {<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#333', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }} >A/B Test</CardTitle>
            <CardText>
              This project analyzes player retention of the popular game Cookie Cats depending on where 'gates' are placed in the game. A/B test conducted in Python.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Cookie-Cats-AB-Test"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>}

          {/* Project 5 */}
          {<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#333', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmqyTmzBS3Ivgjnr9H47w04MWzdztLtsMfrw&usqp=CAU) center / cover' }} >Portfolio Site </CardTitle>
            <CardText>
              My Portfolio Website that I built using HTML,CSS,JAVASCRIPT,JSX, and React.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/portfolio_website"><Button colored>GitHub</Button></a>
              <a href="http://www.developersandro.com/"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>}

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

          {/* Project 4*/}
          {<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#333', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }} >A/B Test</CardTitle>
            <CardText>
              This project analyzes player retention of the popular game Cookie Cats depending on where 'gates' are placed in the game. A/B test conducted in Python.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/Cookie-Cats-AB-Test"><Button colored>GitHub</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>}

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

          {/* Project 5 */}
          {<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#333', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmqyTmzBS3Ivgjnr9H47w04MWzdztLtsMfrw&usqp=CAU) center / cover' }} >Portfolio Site </CardTitle>
            <CardText>
              My Portfolio Website that I built using HTML,CSS,JAVASCRIPT,JSX, and React.
            </CardText>
            <CardActions border>
              <a href="https://github.com/sandroclark/portfolio_website"><Button colored>GitHub</Button></a>
              <a href="http://www.developersandro.com/"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>} 
   
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
