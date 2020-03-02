import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../actions/post";

const PostItem = ({
  post: { user, _id, title, text, date },
  auth,
  deletePost
}) => {
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p class="my-1">{text}</p>
          <p class="post-date">{date}</p>
        </div>
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { deletePost })(PostItem);
