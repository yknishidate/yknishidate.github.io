import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  const title = `西舘祐樹 | Yuki Nishidate`;
  const description = `Nishiki's personal website`;
  const image = `https://yknishidate.github.io/static/66bbd614d0f1c543f5464307bed243bd/8d565/favicon.webp`;
  return (
    <Helmet
      htmlAttributes={{ lang: `ja-jp` }}
      title={title}
      description={description}
      meta={[
        {
          name: `description`,
          content: description,
        },
        // open graph
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        // twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:twitter:description`,
          content: description,
        },
        {
          name: `twitter:site`,
          content: `@yknishidate`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ]}
    />
  );
};

export default Seo;
