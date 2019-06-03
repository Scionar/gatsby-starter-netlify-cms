import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LandingPageContent.scss';

const LandingPageContent = ({ modifier, style, title, description }) => {
  return (
    <div className={classNames('landing-page-content', modifier)} style={style}>
      <h1 className="landing-page-content__title">{title}</h1>
      <p className="landing-page-content__content">{description}</p>
    </div>
  );
};

LandingPageContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  modifier: PropTypes.string,
  style: PropTypes.object
};

export default LandingPageContent;
