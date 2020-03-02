import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJoinme } from "../../actions/joinme";
import Admin_joinme_item from "./Admin_joinme_item";

const Admin_joinme = ({ getJoinme, joinme: { joinmes } }) => {
  useEffect(() => {
    getJoinme();
  }, [getJoinme]);
  return (
    <Fragment>
      <h1 className="large text-primary">Join Me List</h1>

      <div className="posts">
        {joinmes.map(joinme => (
          <Admin_joinme_item key={joinme._id} joinme={joinme} />
        ))}
        ;
      </div>
    </Fragment>
  );
};

Admin_joinme.propTypes = {
  getJoinme: PropTypes.func.isRequired,
  joinme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  joinme: state.joinme
});

export default connect(mapStateToProps, { getJoinme })(Admin_joinme);
