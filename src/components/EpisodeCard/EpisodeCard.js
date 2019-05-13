import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "gatsby";

import "./EpisodeCard.scss";

const EpisodeCard = ({
  modifier,
  style,
  runningNumber,
  coverImage,
  title,
  description
}) => {
  // If number has single digit, style it to use zero as first.
  let styledRunningNumber = '' + runningNumber;
  if (styledRunningNumber.length === 1) styledRunningNumber = '0' + styledRunningNumber;

  return (
    <div className={classNames("episode-card", modifier)} style={style}>
      <div className="episode-card__running-number">
        {styledRunningNumber}
      </div>
      <img className="episode-card__cover-image" src={coverImage} alt={title} />
      <div className="episode-card__info">
        <div className="episode-card__title">{title}</div>
        <div className="episode-card__description">{description}</div>
        <Link className="episode-card__link">More</Link>
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  runningNumber: PropTypes.number,
  coverImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default EpisodeCard;
