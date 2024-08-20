import React from "react";
import PropTypes from "prop-types";

const SocialSignOnButton = ({ imageSrc, onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      <img src={imageSrc} className="social-image" />
    </div>
  );
};

SocialSignOnButton.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default SocialSignOnButton;
