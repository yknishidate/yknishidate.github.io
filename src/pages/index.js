import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Tbody,
  TableCaption,
  Tr,
  Td,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { SiZenn, SiGithub, SiTwitter } from "react-icons/si";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SocialLink from "../components/social_link";
import Card from "../components/card";
import Fade from "react-reveal/Fade";

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
      <Box mb={8}>
        <Flex align={"center"} mb={4}>
          <Box>
            <Heading size={"2xl"} mb={4}>西舘 祐樹</Heading>
            <Text mb={2}>コンピュータグラフィックスを勉強中の大学生です</Text>
          </Box>
          <Spacer />
          <Box display={{ base: "none", sm: "inline" }}>
            <StaticImage
              src={"../images/favicon.png"}
              alt="logo"
              layout="fixed"
              width={100}
              height={100}
              placeholder="none"
            />
          </Box>
        </Flex>
        <Link href='https://chakra-ui.com' isExternal color={"gray.900"}>
          Twitter
        </Link>
      </Box>

      <Heading mb={4}>Posts</Heading>
      <Text mb={4}>趣味で作ったものなどを載せています</Text>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
        {mdxs.map((mdx) => {
          return (
            <Fade bottom duration={500} delay={100} distance="30px">
              <Card product={mdx}></Card>
            </Fade>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default IndexPage;
