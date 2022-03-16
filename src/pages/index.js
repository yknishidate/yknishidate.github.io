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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faBriefcase,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ year, children }) => {
  return (
    <Tr>
      <Td px={0} py={2}>
        {year}
      </Td>
      <Td w="100%" py={2}>
        {children}
      </Td>
    </Tr>
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

      <Box mb={16}>
        <Heading as={"h1"} size={"xl"}>
          西舘 祐樹 - Yuki Nishidate
        </Heading>
        <Text>コンピュータグラフィックスを勉強中の大学生です</Text>

        <Box mb={8}>
          <Text py={2}>
            <Box color={"blue.300"} display={"inline"} mr={2}>
              <FontAwesomeIcon icon={faBuildingColumns} fixedWidth={true} />
            </Box>
            慶應義塾大学 理工学部 情報工学科4年
          </Text>
          <Text py={2}>
            <Box color={"blue.300"} display={"inline"} mr={2}>
              <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
            </Box>
            R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)
          </Text>
          <Text py={2}>
            <Box color={"blue.300"} display={"inline"} mr={2}>
              <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
            </Box>
            3Dデザイナー @ 家具広告制作会社 (2018)
          </Text>
          <Text py={2}>
            <Box color={"blue.300"} display={"inline"} mr={2}>
              <FontAwesomeIcon icon={faLink} fixedWidth={true} />
            </Box>
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
          </Text>
        </Box>
      </Box>

      <Box mb={16}>
        <Heading as={"h2"} size={"lg"}>
          活動
        </Heading>
        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <TableRow year={"2017"}>
              DHU U-18アーティストコンテストCG部門優秀賞受賞
            </TableRow>
            <TableRow year={"2018"}>基本情報技術者試験合格</TableRow>
            <TableRow year={"2019"}>CGエンジニア検定エキスパート合格</TableRow>
            <TableRow year={"2019"}>
              CGクリエイター検定エキスパート合格
            </TableRow>
            <TableRow year={"2019"}>
              文部科学大臣賞受賞（CGエンジニア検定満点）
            </TableRow>
            <TableRow year={"2022"}>
              バンダイナムコ研究所データサイエンスチャレンジ優勝
            </TableRow>
          </Tbody>
        </Table>
      </Box>

      {/* section */}
      <Box mb={16}>
        <Heading as={"h2"} size={"lg"}>
          発表
        </Heading>
        <Table variant={"unstyled"}>
          <Tbody>
            <TableRow year={"2022"}>
              西舘祐樹，藤代一成：「高速プライマリレイ走査のためのアフィン変換レイアライメント」，情報処理学会第84回全国大会，6ZF-01，
              <b>学生奨励賞</b>
            </TableRow>

            <TableRow year={"2022"}>
              西舘祐樹，藤代一成：「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」，情報処理学会研究速報，Vol.
              2022-CG-185
            </TableRow>
          </Tbody>
        </Table>
      </Box>

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
