import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ title, image }) => {
  const siteTitle = "Nishiki";
  const lang = `ja`;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${siteTitle}`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ]}
    />
  );
};

Seo.defaultProps = {
  image: `https://pbs.twimg.com/profile_banners/701528818217975808/1532349288/1080x360`,
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Seo;
