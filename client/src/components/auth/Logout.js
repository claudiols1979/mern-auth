import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import * as GoIcons from 'react-icons/go'

class Logout extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    // const { user } = this.props.auth;
    // console.log(user)

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper logout">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              {/* <b>Hey there,</b> {user.name.split(" ")[0]} */}
              
             
              <p className="flow-text grey-text text-darken-1">
                To log out click the button below
                {/* <span><GoIcons.GoArrowSmallDown/></span> */}
                                   
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
