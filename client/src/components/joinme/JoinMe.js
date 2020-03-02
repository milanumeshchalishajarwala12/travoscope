import React, { Fragment } from "react";
import PropTypes from "prop-types";
import JoinMeForm from "./JoinMeForm";

const JoinMe = props => {
  return (
    <Fragment>
      <section className="joinme-image"></section>
      <section className="joinme-text">
        <h4>
          "Hello there, welcome to
          <i>
            <b>Join me,</b>
          </i>{" "}
          a resourse designed to help you navigate through the beauty of
          Travelling Solo. With this you can sign up to join me for my upcoming
          trip, Out of all the people who have signed up, two lucky ones will be
          selected for the trip. All the trip details will be communicated via
          email to them.<br></br>
        </h4>
      </section>
      <section className="joinme-form">
        <h3>
          <b>Are you coming?</b>
        </h3>
        <div className="tripdetails"></div>
        <br></br>
        <h2>2-day Trip to Yosemite National Park</h2>
        <br></br>
        <h3>Go ahead, take your first step and sign up for it."</h3>
        <JoinMeForm />
      </section>
    </Fragment>
  );
};

JoinMe.propTypes = {};

export default JoinMe;
