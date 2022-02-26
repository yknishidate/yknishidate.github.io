import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  const title = `西舘祐樹 | Yuki Nishidate`;
  const description = `Nishiki's personal website`;
  const image = `https://pbs.twimg.com/profile_images/994269415951646720/eDUi27lP_400x400.jpg`;
  return (
    <Helmet
      htmlAttributes={{ lang: `ja-jp` }}
      title={title}
      description={description}
      meta={[
        // open graph
        {
          property: `og:title`,
          content: { title },
        },
        {
          name: `og:description`,
          content: { description },
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: { image },
        },
        // twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: { title },
        },
        {
          name: `twitter:twitter:description`,
          content: { description },
        },
        {
          name: `twitter:site`,
          content: `@yknishidate`,
        },
        {
          name: `twitter:image`,
          content: { image },
        },
      ]}
    />
  );
};

export default Seo;
