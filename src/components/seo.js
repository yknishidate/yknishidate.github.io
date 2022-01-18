import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
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
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${siteTitle}`,
        },
        {
          name: `twitter:image`,
          content: `https://raw.githubusercontent.com/yknishidate/yknishidate.github.io/master/icons/icon-256x256.png`,
        },
      ]}
    />
  );
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Seo;
