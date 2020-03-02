import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Admin_joinme_item = ({
  joinme: { _id, firstname, lastname, email },
  auth
}) => {
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <h4>{firstname}</h4>
        </div>
        <div>
          <p class="my-1">{lastname}</p>
          <p class="post-date">{email}</p>
        </div>
      </div>
    </Fragment>
  );
};

Admin_joinme_item.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {})(Admin_joinme_item);
