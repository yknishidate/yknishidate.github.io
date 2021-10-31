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
  Tr,
  Td,
  SimpleGrid,
  GridItem,
  Container,
  Badge,
} from "@chakra-ui/react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import { SiZenn, SiGithub, SiTwitter } from "react-icons/si";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SocialLink from "../components/social_link";
import { Link } from "gatsby";

const IndexPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
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
    <>
      <Seo title="Home" />
      <Layout>
        <Box mb={8}>
          <Flex align={"center"} mb={4}>
            <Box>
              <Heading mb={4}>Yuki Nishidate</Heading>
              <Text mb={2}>慶應義塾大学 情報工学科 4 年</Text>
              <Text mb={2}>コンピュータグラフィックスを勉強中です</Text>
            </Box>
            <Spacer />
            {!isMobile && (
              <StaticImage
                src={"../images/favicon.png"}
                alt="logo"
                layout="fixed"
                width={100}
                height={100}
                placeholder="none"
              />
            )}
          </Flex>

          <SocialLink
            to="https://twitter.com/yknsdt/"
            icon={SiTwitter}
            name={"Twitter"}
          />

          <SocialLink
            to="https://github.com/nishidate-yuki"
            icon={SiGithub}
            name={"GitHub"}
          />

          <SocialLink
            to="https://zenn.dev/nishiki"
            icon={SiZenn}
            name={"Zenn"}
          />
        </Box>

        <Accordion allowToggle mb={8}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Bio
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Table variant={"unstyled"}>
                <Tbody>
                  <Tr>
                    <Td>2018</Td>
                    <Td>
                      慶應義塾湘南藤沢高等部 卒業
                      <br />
                      3Dデザイナーインターン @ 家具広告制作会社
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>2019~2021</Td>
                    <Td>
                      {"R&Dエンジニアインターン @ "}
                      <a
                        href="https://www.dfx.co.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <u>DIGITAL FRONTIER INC.</u>
                      </a>
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>~2022</Td>
                    <Td>慶應義塾大学 理工学部 情報工学科 在学中</Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Tools
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Table variant={"unstyled"}>
                <Tbody>
                  <Tr>
                    <Td>C++</Td>
                    <Td>グラフィックス関連でよく使っています</Td>
                  </Tr>

                  <Tr>
                    <Td>Python</Td>
                    <Td>バイトで数値処理に使っています</Td>
                  </Tr>

                  <Tr>
                    <Td>Vulkan</Td>
                    <Td>得意ではないですが、よく書いています</Td>
                  </Tr>

                  <Tr>
                    <Td>React</Td>
                    <Td>当サイトを作るために使っています</Td>
                  </Tr>

                  <Tr>
                    <Td>Qt</Td>
                    <Td>たまに使っていました</Td>
                  </Tr>

                  <Tr>
                    <Td>Cinema 4D</Td>
                    <Td>以前はよくCG制作に使っていました</Td>
                  </Tr>

                  <Tr>
                    <Td>Houdini</Td>
                    <Td>ごく稀に使っています</Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Heading mb={4}>Posts</Heading>
        <SimpleGrid columns={isMobile ? 1 : 2} spacing={4}>
          {mdxs.map((mdx) => {
            const image = getImage(mdx.frontmatter.thumb);
            return (
              <Link to={`/post/${mdx.slug}/`}>
                <GridItem
                  bg={"gray.700"}
                  height={"100%"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <GatsbyImage image={image} />
                  <Container py={4}>
                    <Heading size={"md"} fontWeight={"normal"} pb={2}>
                      {mdx.frontmatter.title}
                    </Heading>
                    {mdx.frontmatter.tags.map((tag) => {
                      return <Badge mr={2}>{tag}</Badge>;
                    })}
                    <Text>{mdx.frontmatter.date}</Text>
                  </Container>
                </GridItem>
              </Link>
            );
          })}
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default IndexPage;
