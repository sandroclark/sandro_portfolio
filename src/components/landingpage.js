import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../james.website.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
              <img
                src={avatar}
                alt="fletch"
                className="avatar-img"
                />
          

            <div className="banner-text">
              <h1>James Clark</h1>
              <h5>Data Science and Front End Development</h5>

            <hr/>

          <p>Python | SQL | HTML/CSS | JavaScript | React | Flask | TensorFlow | Django</p>

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
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
