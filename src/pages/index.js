import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Link,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";
import Fade from "react-reveal/Fade";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faBriefcase,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const Title = ({ children }) => {
  return (
    <Heading as={"h1"} size={"xl"} pt={8} pb={2}>
      {children}
    </Heading>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <Heading as={"h3"} size={"md"} pt={4} pb={2}>
      {children}
    </Heading>
  );
};

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
                  gatsbyImageData(width: 200, height: 200)
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

      <Box>
        <Title>西舘 祐樹 - Yuki Nishidate</Title>
        <Text px={0} py={2}>
          コンピュータグラフィックスを勉強しています
        </Text>

        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <Tr>
              <Td px={0} py={2}>
                <Box color={"blue.300"} display={"inline"}>
                  <FontAwesomeIcon icon={faBuildingColumns} fixedWidth={true} />
                </Box>
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                慶應義塾大学 理工学部 情報工学科4年
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                <Box color={"blue.300"} display={"inline"}>
                  <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
                </Box>
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                <Box color={"blue.300"} display={"inline"}>
                  <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
                </Box>
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                3Dデザイナー @ 家具広告制作会社 (2018)
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                <Box color={"blue.300"} display={"inline"}>
                  <FontAwesomeIcon icon={faLink} fixedWidth={true} />
                </Box>
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                <Link
                  href="https://twitter.com/yknishidate"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  Twitter
                </Link>
                {" / "}
                <Link
                  href="https://github.com/yknishidate"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  GitHub
                </Link>
                {" / "}
                {"yuki_nishidate[at]keio.jp"}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>発表</SectionTitle>
        <Table variant={"unstyled"}>
          <Tbody>
            <Tr>
              <Td px={0} py={2}>
                2022
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                西舘祐樹，藤代一成：「高速プライマリレイ走査のためのアフィン変換レイアライメント」，情報処理学会第84回全国大会，講演論文集(4)，
                <b>学生奨励賞</b>
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2022
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                西舘祐樹，藤代一成：「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」，情報処理学会研究速報，Vol.
                2022-CG-185，<b>優秀研究発表賞</b>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>他の活動</SectionTitle>
        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <Tr>
              <Td px={0} py={2}>
                2017
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                DHU U-18アーティストコンテストCG部門優秀賞受賞
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2018
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                基本情報技術者試験合格
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2019
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                CGエンジニア検定エキスパート合格
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2019
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                CGクリエイター検定エキスパート合格
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2019
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                文部科学大臣賞受賞（CGエンジニア検定満点）
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2022
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                バンダイナムコ研究所データサイエンスチャレンジ優勝
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>制作物</SectionTitle>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} py={2}>
          {mdxs.map((mdx) => {
            return <Card product={mdx}></Card>;
          })}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default IndexPage;
