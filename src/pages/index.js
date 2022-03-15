import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          nodes {
            slug
            frontmatter {
              title
              date(formatString: "yyyy / M")
              tags
              thumb {
                publicURL
                childImageSharp {
                  gatsbyImageData(width: 400, height: 200)
                }
              }
            }
            body
          }
        }
      }
    `
  );
  const mdxs = data.allMdx.nodes;

  return (
    <Layout>
      <Seo />

      {/* section */}
      <Box mb={16}>
        <Flex align={"top"}>
          <Box>
            <Heading as={"h1"} size={"xl"}>
              西舘 祐樹 / Yuki Nishidate
            </Heading>
            <Text>コンピュータグラフィックスを勉強中の大学生です</Text>

            <Link to="/profile">
              <Button mt={4} bg="gray.600">
                Read profile
              </Button>
            </Link>
          </Box>
          <Spacer />
          <Box display={{ base: "none", sm: "inline" }} p={4}>
            <StaticImage
              src={"../images/favicon.png"}
              alt="logo"
              layout="fixed"
              width={120}
              height={120}
              placeholder="none"
            />
          </Box>
        </Flex>
      </Box>

      {/* section */}
      <Box>
        <Heading as={"h2"} size={"lg"}>
          創作物
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
          {mdxs.map((mdx) => {
            return (
              <Fade bottom duration={500} delay={100} distance="30px">
                <Card product={mdx}></Card>
              </Fade>
            );
          })}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
