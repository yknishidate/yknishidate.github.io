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
  HStack,
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
      <Seo title="Home" />
      <Box mb={8}>
        <Flex align={"center"} mb={4}>
          <Box>
            <HStack mb={4} spacing={8}>
              <Heading>西舘 祐樹</Heading>
              <Heading
                color={"gray.400"}
                display={{ base: "none", sm: "inline" }}
              >
                Yuki Nishidate
              </Heading>
            </HStack>
            <Text mb={2}>コンピュータグラフィックスを勉強中の大学生です✍</Text>
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

        <Flex direction={"row"}>
          <SocialLink
            to="https://twitter.com/yknishidate/"
            icon={SiTwitter}
            name={"Twitter"}
          />

          <SocialLink
            to="https://github.com/yknishidate"
            icon={SiGithub}
            name={"GitHub"}
          />

          <SocialLink
            to="https://zenn.dev/nishiki"
            icon={SiZenn}
            name={"Zenn"}
          />
        </Flex>
      </Box>

      <Accordion allowToggle mb={16}>
        <AccordionItem>
          <AccordionButton _focus={{ _focus: "none" }}>
            <Box flex="1" textAlign="left">
              学歴
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant={"unstyled"}>
              <Tbody>
                <Tr>
                  <Td>2018</Td>
                  <Td>慶應義塾湘南藤沢高等部 卒業</Td>
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
          <AccordionButton _focus={{ _focus: "none" }}>
            <Box flex="1" textAlign="left">
              活動
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant={"unstyled"}>
              <Tbody>
                <Tr>
                  <Td>2017</Td>
                  <Td>
                    デジタルハリウッド大学U-18アーティストコンテストCG部門優秀賞
                  </Td>
                </Tr>
                <Tr>
                  <Td>2018</Td>
                  <Td>基本情報技術者</Td>
                </Tr>
                <Tr>
                  <Td>2019</Td>
                  <Td>CGエンジニア検定エキスパート</Td>
                </Tr>
                <Tr>
                  <Td>2019</Td>
                  <Td>CGクリエイター検定エキスパート</Td>
                </Tr>
                <Tr>
                  <Td>2019</Td>
                  <Td>文部科学大臣賞（CGエンジニア検定エキスパート満点）</Td>
                </Tr>
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _focus={{ _focus: "none" }}>
            <Box flex="1" textAlign="left">
              職歴
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant={"unstyled"}>
              <Tbody>
                <Tr>
                  <Td>2019</Td>
                  <Td>3Dデザイナー（インターン）@ 家具広告制作会社</Td>
                </Tr>
                <Tr>
                  <Td>2019-2021</Td>
                  <Td>
                    R&Dエンジニア（インターン＆アルバイト）@ DIGITAL FRONTIER
                    INC.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

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
