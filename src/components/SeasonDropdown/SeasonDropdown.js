import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './SeasonDropdown.scss';

class SeasonDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    this.setState({
      open: this.props.open
    });
  }

  toggleOpen() {
    this.setState((state, props) => ({
      open: !state.open
    }));
  }

  render() {
    return (
      <div
        className={classNames('season-dropdown', {
          'season-dropdown--open': this.state.open
        })}
        style={this.props.style}
      >
        <div className="season-dropdown__header" onClick={this.toggleOpen}>
          {this.props.header}
          <button className="season-dropdown__toggle-button" />
        </div>
        {this.state.open && (
          <div className="season-dropdown__content">{this.props.children}</div>
        )}
      </div>
    );
  }
}

SeasonDropdown.propTypes = {
  style: PropTypes.object,
  open: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired
  ])
};

export default SeasonDropdown;
