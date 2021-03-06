import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import { PlayButtonContainer } from '../../containers';
import './EpisodeCard.scss';

const EpisodeCard = ({
  modifier,
  style,
  runningNumber,
  coverImage,
  title,
  description,
  link,
  season,
  episodeUrl
}) => {
  let styledRunningNumber = '';
  if (runningNumber !== null) {
    // If number has single digit, style it to use zero as first.
    styledRunningNumber += runningNumber;
    if (styledRunningNumber.length === 1) {
      styledRunningNumber = '0' + styledRunningNumber;
    }
  }

  return (
    <div className={classNames('episode-card', modifier)} style={style}>
      <div className="episode-card__running-number">{styledRunningNumber}</div>
      <img className="episode-card__cover-image" src={coverImage} alt={title} />
      <div className="episode-card__info">
        <Link className="episode-card__title-link" to={link}>
          <span className="episode-card__title-running-number">
            {styledRunningNumber}
          </span>
          <h3 className="episode-card__title">{title}</h3>
        </Link>
        <div className="episode-card__description">{description}</div>
        <Link className="episode-card__link" to={link}>
          More
        </Link>
        <PlayButtonContainer
          season={season}
          episode={runningNumber}
          title={title}
          episodeUrl={episodeUrl}
        />
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  modifier: PropTypes.string,
  style: PropTypes.object,
  runningNumber: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  coverImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  episodeUrl: PropTypes.string.isRequired
};

export default EpisodeCard;
