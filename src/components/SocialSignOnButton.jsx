import React from "react";
import PropTypes from "prop-types";

const SocialSignOnButton = ({ imageSrc, socialName }) => {
  return (
    <div className="button-container">
      <img src={imageSrc} className="social-image" />
      <p className="ms-2">Sign in with {socialName}</p>
    </div>
  );
};

SocialSignOnButton.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  socialName: PropTypes.string.isRequired,
};

export default SocialSignOnButton;
