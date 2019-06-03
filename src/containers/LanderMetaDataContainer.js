import React, { Component } from 'react';

import NpLogo from '../img/np-logo.png';
import { MetaData } from '../components';

class LanderMetaDataContainer extends Component {
  render() {
    return (
      <MetaData
        baseUrl={process.env.GATSBY_WEBSITE_URL}
        type="CreativeWorkSeries"
        title={this.props.title}
        description={this.props.description}
        siteName={'Nudging Pixels'}
        canonical={process.env.GATSBY_CANONICAL_URL}
        siteUrl={process.env.GATSBY_WEBSITE_URL}
        twitterUrl={'https://twitter.com/nudgingpixels'}
        twitterAccount={'@NudgingPixels'}
        publisherLogo={NpLogo}
        publisherLogoHeight={264}
        publisherLogoWidth={436}
      />
    );
  }
}

export default LanderMetaDataContainer;
