import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Card from "../components/card";
import ExternalLink from "../components/link";
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

const Icon = ({ icon }) => {
  return (
    <Box color={"blue.300"} display={"inline"}>
      <FontAwesomeIcon icon={icon} fixedWidth={true} />
    </Box>
  );
};

const TdLeft = ({ children }) => {
  return (
    <Td px={0} py={1.5}>
      {children}
    </Td>
  );
};

const TdRight = ({ children }) => {
  return (
    <Td pr={0} pl={4} py={1.5} w="100%" lineHeight={1.5}>
      {children}
    </Td>
  );
};

const TrWithIcon = ({ children, icon }) => {
  return (
    <Tr>
      <TdLeft>
        <Icon icon={icon} />
      </TdLeft>
      <TdRight>{children}</TdRight>
    </Tr>
  );
};

const TrWithYear = ({ children, year }) => {
  return (
    <Tr>
      <TdLeft>{year}</TdLeft>
      <TdRight>{children}</TdRight>
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
        <Title>西舘 祐樹 // Yuki Nishidate</Title>

        <Text px={0} py={2}>
          コンピュータグラフィックスを勉強しています
        </Text>

        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <TrWithIcon icon={faBuildingColumns}>
              慶應義塾大学大学院理工学研究科 修士課程1年
            </TrWithIcon>

            <TrWithIcon icon={faBriefcase}>
              R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)
            </TrWithIcon>

            <TrWithIcon icon={faBriefcase}>3Dデザイナー (2018)</TrWithIcon>

            <TrWithIcon icon={faLink}>
              <ExternalLink href="https://twitter.com/yknishidate">
                Twitter
              </ExternalLink>
              {" / "}
              <ExternalLink href="https://github.com/yknishidate">
                GitHub
              </ExternalLink>
              {" / "}
              {"yuki_nishidate[at]keio.jp"}
            </TrWithIcon>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>研究発表</SectionTitle>
        <Table variant={"unstyled"}>
          <Tbody>
            <TrWithYear year={"2022"}>
              {
                "西舘祐樹 藤代一成：「高速プライマリレイ走査のためのアフィン変換レイアライメント」 "
              }
              <br />
              {"情報処理学会 第84回全国大会 "}
              <ExternalLink href="https://www.ipsj.or.jp/award/taikaigakusei.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9%E5%90%9B%EF%BC%88%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6%EF%BC%89">
                学生奨励賞
              </ExternalLink>
            </TrWithYear>

            <TrWithYear year={"2022"}>
              {
                "西舘祐樹 藤代一成：「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」 "
              }
              <br />
              {"第185回 CGVI研究発表会 "}
              <ExternalLink href="https://cgvi.jp/info/bestpapers/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9">
                優秀研究発表賞
              </ExternalLink>
              {" / "}
              <ExternalLink href="https://cgvi.jp/info/%e5%ad%a6%e7%94%9f%e7%99%ba%e8%a1%a8%e8%b3%9e/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9">
                学生発表賞
              </ExternalLink>
            </TrWithYear>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>イベント発表</SectionTitle>
        <Table variant={"unstyled"}>
          <Tbody>
            <TrWithYear year={"2022"}>
              <ExternalLink href="https://connpass.com/event/237956/">
                {"バンダイナムコ研究所データサイエンスチャレンジ振り返り会"}
              </ExternalLink>
              <br />
              {"優勝解法解説"}
            </TrWithYear>

            <TrWithYear year={"2022"}>
              <ExternalLink href="https://siggraph.xyz/sa2021/">
                {"SIGGRAPH Asia 2021勉強会"}
              </ExternalLink>
              <br />
              {"Sampling and Denoisingセッション担当"}
            </TrWithYear>

            <TrWithYear year={"2022"}>
              <ExternalLink href="https://www.khronos.org/events/japan-vulkan-meetup-september-9-2022">
                {"Japan Vulkan Meetup"}
              </ExternalLink>
              <br />
              {'Speaker of "Vulkan from a Student / Researcher\'s Perspective"'}
            </TrWithYear>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>資格・受賞など</SectionTitle>
        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <TrWithYear year={"2017"}>
              DHU U-18アーティストコンテストCG部門優秀賞受賞
            </TrWithYear>

            <TrWithYear year={"2017"}>基本情報技術者試験合格</TrWithYear>

            <TrWithYear year={"2018"}>
              CGエンジニア検定エキスパート合格
            </TrWithYear>

            <TrWithYear year={"2018"}>
              CGクリエイター検定エキスパート合格
            </TrWithYear>

            <TrWithYear year={"2019"}>
              文部科学大臣賞受賞（CGエンジニア検定満点による）
            </TrWithYear>

            <TrWithYear year={"2022"}>
              バンダイナムコ研究所データサイエンスチャレンジ優勝
            </TrWithYear>

            <TrWithYear year={"2022"}>
              {"情報処理学会 "}
              <ExternalLink href="https://www.ipsj.or.jp/award/yamashita2022.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9,%E3%81%84%E3%81%9F%E5%AE%9F%E8%A3%85%E2%80%94">
                {"山下記念研究賞受賞"}
              </ExternalLink>
            </TrWithYear>
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
