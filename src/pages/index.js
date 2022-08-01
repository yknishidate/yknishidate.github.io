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
    <Heading as={"h2"} size={"lg"} pt={4} pb={2}>
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
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Layout>
      <Seo />
      <Box>
        {isMobile ? (
          <Title>
            西舘 祐樹 <br /> Yuki Nishidate
          </Title>
        ) : (
          <Title>西舘 祐樹 - Yuki Nishidate</Title>
        )}

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
                慶應義塾大学 大学院理工学研究科 修士課程1年
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
                3Dデザイナー (2018)
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
                {"西舘祐樹 藤代一成：「高速プライマリレイ走査のためのアフィン変換レイアライメント」 情報処理学会第84回全国大会 "}
                <Link
                  href="https://www.ipsj.or.jp/award/taikaigakusei.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9%E5%90%9B%EF%BC%88%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6%EF%BC%89"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  {"学生奨励賞"}
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td px={0} py={2}>
                2022
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                {"西舘祐樹 藤代一成：「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」 第185回CGVI研究発表会 "}
                <Link
                  href="https://cgvi.jp/info/bestpapers/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  {"優秀研究発表賞"}
                </Link>
                {" / "}
                <Link
                  href="https://cgvi.jp/info/%e5%ad%a6%e7%94%9f%e7%99%ba%e8%a1%a8%e8%b3%9e/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  {"学生発表賞"}
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>資格・受賞など</SectionTitle>
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
            
            <Tr>
              <Td px={0} py={2}>
                2022
              </Td>
              <Td pr={0} pl={4} py={2} w="100%">
                <Link
                  href="https://www.ipsj.or.jp/award/yamashita2022.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9,%E3%81%84%E3%81%9F%E5%AE%9F%E8%A3%85%E2%80%94"
                  isExternal
                  fontWeight={"bold"}
                  textDecoration={"underline"}
                  _focus={{ _focus: "none" }}
                >
                  {"情報処理学会 山下記念研究賞受賞"}
                </Link>
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
