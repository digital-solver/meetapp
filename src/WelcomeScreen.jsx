import React from "react";
import "./WelcomeScreen.css";
import PropTypes from "prop-types";

function WelcomeScreen(props) {
  
  // Welcome screen visible if prop 'showWelcomeScreen' is truthy 
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">

      <div className="authentication">
        <h2>Log in to search global tech events</h2>
        
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => { props.getAccessToken(); }}
            rel="nofollow noopener"
            className="btn-text"
          >
            <b>Sign in with Google</b>
          </button>
        </div>
      </div>

      <div className="privacy-policy">
        <a href="https://Digital-Solver.github.io/meetapp/privacy.html" rel="nofollow noopener">
        Privacy policy
        </a>
      </div>
      
    </div>
  ) : null;
}


WelcomeScreen.propTypes = {
  showWelcomeScreen: PropTypes.func.isRequired,
  getAccessToken: PropTypes.func.isRequired
};

export default WelcomeScreen;
