import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  const lang = `ja`;
  const title = "西舘祐樹 | Yuki Nishidate";
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
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
          content: { title },
        },
        {
          name: `twitter:image`,
          content: `https://pbs.twimg.com/profile_images/994269415951646720/eDUi27lP_400x400.jpg`,
        },
      ]}
    />
  );
};

export default Seo;
