import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../james.website.png';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>James Clark</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{height: '250px'}}
               />

          </Cell>
          <Cell col={6}>
            <h2>Let's Connect!</h2>
            <hr/>

            <div className="social-links">


            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jamessandroclark/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/sandroclark" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>


            {/* Email */}
              <a href="mailto:sandro93@ucla.edu" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-envelope"  aria-hidden="true" />
            </a>

            </div>

            {/* <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (530) 680-0380
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sandro93@ucla.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>

              </List>
            </div> */}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
