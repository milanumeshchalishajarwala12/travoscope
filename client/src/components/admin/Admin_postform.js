import { connect } from "react-redux";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPost } from "../../actions/post";

const Admin_postform = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: ""
  });

  const { title, text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Add Post</h3>
      </div>
      <form
        class="form my-1"
        onSubmit={e => {
          e.preventDefault();
          addPost({ title, text });
          setFormData("  ");
        }}
      >
        <textarea
          name="title"
          cols="30"
          rows="2"
          placeholder="Add Title"
          required
          value={title}
          onChange={e => onChange(e)}
        ></textarea>

        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
          value={text}
          onChange={e => onChange(e)}
        ></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

Admin_postform.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(Admin_postform);
