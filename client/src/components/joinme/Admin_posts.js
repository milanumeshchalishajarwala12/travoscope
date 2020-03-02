import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Admin_postitem from "./Admin_postitem";
import Admin_postform from "./Admin_postform";

const Admin_posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    ""
  ) : (
    <Fragment>
      <Link to={"/adminjoinme"}>
        <input
          type="submit"
          class="btn btn-dark my-2"
          value="View Join me List"
        />
      </Link>

      <Admin_postform />

      <div className="posts">
        {posts.map(post => (
          <Admin_postitem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Admin_posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Admin_posts);
