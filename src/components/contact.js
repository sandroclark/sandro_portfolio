import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">

            <div className="contact-banner-text">

              <h1>Let's Connect!</h1>

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


            </div>
        </Grid>
      </div>
    )
  }
}

export default Contact;
