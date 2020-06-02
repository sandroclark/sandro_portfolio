import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../james.website.png';

class About extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="about-me">
          <Cell col={12}>
            <img
              src={avatar}
              alt="fletch"
              className="avatar-img"
            />


            <div className="about-banner-text">
              <h1>About me</h1>
              <h5>A communicative developer with a Passion for Learning</h5>

              <hr />

              <p>My education in Humanities has given me a unique perspective in regards to technology. My curiosity and work ethic has pushed me to experiment with a wide variety of technologies from front end development to AI.</p>

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
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>

      </div>

    )
  }
}

export default About;
