import React, { Fragment } from "react";
import PropTypes from "prop-types";

const AboutMe = props => {
  return (
    <Fragment>
      <h1 className="large text-primary">About Me</h1>;
      <div className="aboutme"></div>
      <h2 className="aboutme-quote">
        Travel is a book, one who do not travel reads only the first page..
        <br></br> - St. Augustine
      </h2>
      <h2>
        I have always been a fan of this quote, resembling to it, I always want
        to read a new page out of this book and I always wish to complete it one
        day. I started travelling solo back in 2015 while I was in India, after
        that a chain of trips started which are still running. An experience of
        this level is amazing, I thought. You are completely on your own,
        whatever happens on the trip,good or bad, only you are one who is
        responsible and who faces consequences. Certainly, travelling in a group
        is fun, but travelling solo has another level of awesomenes.
        <br></br>
      </h2>
      <br></br>
      <h1>Get in touch with me: travel@travoscope.com</h1>
    </Fragment>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
