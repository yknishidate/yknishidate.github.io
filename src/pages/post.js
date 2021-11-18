import * as React from "react";
import {
  Heading,
  Text,
  Code,
  Badge,
  Table,
  Tr,
  Td,
  Link,
  Box,
} from "@chakra-ui/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import Seo from "../components/seo";

const Properties = ({ product }) => {
  return (
    <Box mb={8}>
      {product.frontmatter.tags.map((tag) => {
        return (
          <Badge mr={2} textTransform={"none"} px={2} py={1}>
            {tag}
          </Badge>
        );
      })}
      <Text>{product.frontmatter.date}</Text>
    </Box>
  );
};

const Post = ({ pageContext }) => {
  const { product } = pageContext;
  if (!product) {
    return <div></div>;
  }
  return (
    <Layout>
      <Seo title={product.frontmatter.title}></Seo>
      <Heading mb={4} size={"2xl"}>
        {product.frontmatter.title}
      </Heading>
      <Properties product={product}></Properties>

      <MDXProvider
        components={{
          h1: (props) => <Heading {...props} pt={8} pb={2} size="xl" />,
          h2: (props) => <Heading {...props} pt={8} pb={2} size="lg" />,
          h3: (props) => <Heading {...props} pt={4} pb={2} size="md" />,
          p: (props) => <Text {...props} pb={2} />,
          pre: (props) => (
            <Code {...props} display={"block"} whiteSpace={"pre"} p={4} />
          ),
          table: Table,
          tr: Tr,
          td: Td,
          ul: (props) => <Text {...props} pb={2} ml={2} />,
          a: (props) => <Link {...props} color={"blue.500"} isExternal />,
        }}
      >
        <MDXRenderer>{product.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export default Post;
