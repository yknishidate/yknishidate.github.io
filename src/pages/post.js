import * as React from "react";
import { Heading, Text, Code, Table, Tr, Td, Box } from "@chakra-ui/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import ExternalLink from "../components/link";
import { MDXProvider } from "@mdx-js/react";
import Seo from "../components/seo";
import Tag from "../components/tag";

const Post = ({ pageContext }) => {
  const { product } = pageContext;
  if (!product) {
    return <div></div>;
  }
  return (
    <Layout>
      <Seo />

      <Box mb={8}>
        <Text>{product.frontmatter.date}</Text>
        <Heading as={"h1"} py={2} size="lg" fontWeight={400}>
          {product.frontmatter.title}
        </Heading>
        <Box>
          {product.frontmatter.tags.map((tag) => {
            return <Tag>{tag}</Tag>;
          })}
        </Box>
      </Box>

      <MDXProvider
        components={{
          h1: (props) => (
            <Heading
              {...props}
              as={"h1"}
              pt={8}
              pb={2}
              size="lg"
              fontWeight={400}
            />
          ),
          h2: (props) => (
            <Heading
              {...props}
              as={"h2"}
              pt={6}
              pb={2}
              size="md"
              fontWeight={400}
            />
          ),
          h3: (props) => (
            <Heading
              {...props}
              as={"h3"}
              pt={4}
              pb={2}
              size="md"
              fontWeight={400}
            />
          ),
          p: (props) => <Text {...props} py={1} />,
          pre: (props) => (
            <Code {...props} display={"block"} whiteSpace={"pre"} p={4} />
          ),
          table: Table,
          tr: Tr,
          td: Td,
          ul: (props) => <Text {...props} pl={2} />,
          a: (props) => <ExternalLink {...props} />,
        }}
      >
        <MDXRenderer>{product.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default Post;
