import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { addJoinme } from "../../actions/joinme";

const JoinMeForm = ({ addJoinme }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });

  const { firstname, lastname, email } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div class="post-form">
        <div class="bg-primary p">
          <h3>Take the First step!</h3>
        </div>
        <form
          class="form my-1"
          onSubmit={e => {
            e.preventDefault();
            addJoinme({ firstname, lastname, email });
            setFormData("");
          }}
        >
          <textarea
            name="firstname"
            cols="5"
            rows="1"
            placeholder="FirstName"
            required
            value={firstname}
            onChange={e => onChange(e)}
          ></textarea>
          <br></br>
          <textarea
            name="lastname"
            cols="10"
            rows="1"
            placeholder="LastName"
            required
            value={lastname}
            onChange={e => onChange(e)}
          ></textarea>
          <br></br>

          <textarea
            name="email"
            cols="10"
            rows="1"
            placeholder="Email Address"
            required
            value={email}
            onChange={e => onChange(e)}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Sign Up" />
        </form>
      </div>
    </Fragment>
  );
};

JoinMeForm.propTypes = {
  addJoinme: PropTypes.func.isRequired
};

export default connect(null, { addJoinme })(JoinMeForm);
