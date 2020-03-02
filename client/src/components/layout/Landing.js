import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Landing = props => {
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <div className="landing-logo"></div>
            <h1 className="landing-title x-large">Travoscope</h1>
            <p className="lead subtext">A Telescope for Travellers...</p>
            <div className="buttons"></div>
          </div>
        </div>
      </section>
      <section className="landing-bottom">
        <div className="dark-overlay">
          <div className="landing-bottom_left"></div>
          <h2>
            "Hi there, I'm Milan, a solo traveller. I have been exploring places
            since 2015 and have been sharing my experiences with people from a
            short while now. My motive is to make people aware about it and make
            them understand that travelling solo is not such a horrifying thing"
          </h2>
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {};

export default Landing;
