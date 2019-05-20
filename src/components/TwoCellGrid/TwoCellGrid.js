import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TwoCellGrid.scss';

const TwoCellGrid = ({ modifier, firstCell, secondCell }) => (
  <div className={classNames('two-cell-grid', modifier)}>
    <div className="two-cell-grid__first-cell">{firstCell}</div>
    <div className="two-cell-grid__second-cell">{secondCell}</div>
  </div>
);

TwoCellGrid.propTypes = {
  firstCell: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]),
  secondCell: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ]),
  modifier: PropTypes.string
};

export default TwoCellGrid;
