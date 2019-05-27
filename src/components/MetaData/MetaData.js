import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

/**
 * Site metadata formatter.
 *
 * @param {string} title - Page title, example article name.
 * @param {string} type - Page type. (https://schema.org/docs/full.html#datatype_tree)
 * @param {string} siteName - Website name
 * @param {string} description - Content description.
 * @param {string} canonical - Website domain
 * @param {string} siteUrl - Website URL (Like canonical, but with https:// prefix)
 * @param {string} twitterUrl - Twitter page URL
 * @param {string} twitterAccount - Twitter account. This should have @ prefix.
 * @param {string} shareImage - Page hero image URL
 * @param {string} shareImageHeight - Page hero image height.
 * @param {string} shareImageWidth - Page hero image width.
 * @param {string} publisherLogo - Page brand logo.
 * @param {string} publisherLogoHeight - Page brand logo height.
 * @param {string} publisherLogoWidth - Page brand logo width.
 */
const MetaData = ({
  title,
  type,
  siteName,
  description,
  canonical,
  siteUrl,
  twitterUrl,
  twitterAccount,
  shareImage,
  shareImageHeight,
  shareImageWidth,
  publisherLogo,
  publisherLogoHeight,
  publisherLogoWidth
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph metadata */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        {shareImage && <meta property="og:image" content={shareImage} />}
        {shareImageHeight && (
          <meta property="og:image:height" content={shareImageHeight} />
        )}
        {shareImageWidth && (
          <meta property="og:image:width" content={shareImageWidth} />
        )}

        {/* Twitter metadata */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={canonical} />
        {twitterUrl && <meta name="twitter:site" content={twitterUrl} />}
        {twitterAccount && (
          <meta name="twitter:creator" content={twitterAccount} />
        )}
        {shareImage && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        {shareImage && <meta name="twitter:image" content={shareImage} />}

        {/* JSON-LD (https://jsonld.com/why-json-ld/) */}
        <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": "${type}",
                        "url": "${canonical}",
                        ${
                          shareImage
                            ? `"image": {
                                "@type": "ImageObject",
                                "url": "${shareImage}"
                                ${
                                  shareImageHeight && shareImageWidth ? `,` : ``
                                }
                                ${
                                  shareImageHeight && shareImageWidth
                                    ? `"width": "${shareImageWidth}", "height": "${shareImageHeight}"`
                                    : ``
                                }
                            },`
                            : ``
                        }
                        "publisher": {
                            "@type": "Organization",
                            "name": "${siteName}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}"
                                ${
                                  publisherLogoHeight && publisherLogoWidth
                                    ? `,`
                                    : ``
                                }
                                ${
                                  publisherLogoHeight && publisherLogoWidth
                                    ? `"width": "${publisherLogoWidth}", "height": "${publisherLogoHeight}"`
                                    : ``
                                }
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${siteUrl}"
                        },
                        "description": "${description}"
                    }
                `}</script>
      </Helmet>
    </>
  );
};

MetaData.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  siteName: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  siteUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  twitterAccount: PropTypes.string,
  shareImage: PropTypes.string,
  shareImageHeight: PropTypes.string,
  shareImageWidth: PropTypes.string,
  publisherLogo: PropTypes.string,
  publisherLogoHeight: PropTypes.string,
  publisherLogoWidth: PropTypes.string
};

export default MetaData;
