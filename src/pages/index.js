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
  useMediaQuery,
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

const TrWithDate = ({ children, date }) => {
  return (
    <Tr>
      <TdLeft>{date}</TdLeft>
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
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Layout>
      <Seo />
      <Box>
        <Title>
          西舘 祐樹
          {isLargerThan500 ? " | " : <br />}
          Yuki Nishidate
        </Title>

        <Text px={0} py={2}>
          コンピュータグラフィックスを勉強しています
        </Text>

        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <TrWithIcon icon={faBuildingColumns}>
              慶應義塾大学大学院理工学研究科修士1年
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
            <TrWithDate date={"2022/03"}>
              {
                "西舘 祐樹, 藤代 一成, 「高速プライマリレイ走査のためのアフィン変換レイアライメント」, 情報処理学会 第84回全国大会, "
              }
              <ExternalLink href="https://www.ipsj.or.jp/award/taikaigakusei.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9%E5%90%9B%EF%BC%88%E6%85%B6%E6%87%89%E7%BE%A9%E5%A1%BE%E5%A4%A7%E5%AD%A6%EF%BC%89">
                学生奨励賞
              </ExternalLink>
            </TrWithDate>

            <TrWithDate date={"2022/03"}>
              {
                "西舘 祐樹, 藤代 一成, 「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」, 第185回 CGVI研究発表会, "
              }
              <ExternalLink href="https://cgvi.jp/info/bestpapers/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9">
                優秀研究発表賞
              </ExternalLink>
              {" / "}
              <ExternalLink href="https://cgvi.jp/info/%e5%ad%a6%e7%94%9f%e7%99%ba%e8%a1%a8%e8%b3%9e/#185#:~:text=%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9">
                学生発表賞
              </ExternalLink>
            </TrWithDate>

            <TrWithDate date={"2022/10"}>
              {
                "西舘 祐樹, 藤代 一成, 「レイ走査高速化のためのアフィン変換レイアライメント」, Visual Computing 2022, "
              }
              <ExternalLink href="https://cgvi.jp/info/%E5%AD%A6%E7%94%9F%E7%99%BA%E8%A1%A8%E8%B3%9E/#vc2022:~:text=%E5%A4%89%E6%8F%9B%E3%83%AC%E3%82%A4%E3%82%A2%E3%83%A9%E3%82%A4%E3%83%A1%E3%83%B3%E3%83%88%0A%E2%97%8B-,%E8%A5%BF%E8%88%98%20%E7%A5%90%E6%A8%B9,-%EF%BC%88%E6%85%B6%E6%87%89%E7%BE%A9">
                学生発表賞
              </ExternalLink>
            </TrWithDate>

            <TrWithDate date={"2022/12"}>
              {
                'Yuki Nishidate, Issei Fujishiro, "Affine-Transformed Ray Alignment for Fast Ray Traversal," SIGGRAPH Asia 2022, Technical Communications'
              }
            </TrWithDate>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>イベント発表</SectionTitle>
        <Table variant={"unstyled"}>
          <Tbody>
            <TrWithDate date={"2022/03"}>
              <ExternalLink href="https://connpass.com/event/237956/">
                {"バンダイナムコ研究所データサイエンスチャレンジ振り返り会"}
              </ExternalLink>
              <br />
              {"優勝解法解説"}
            </TrWithDate>

            <TrWithDate date={"2022/09"}>
              <ExternalLink href="https://www.khronos.org/events/japan-vulkan-meetup-september-9-2022">
                {"Japan Vulkan Meetup"}
              </ExternalLink>
              <br />
              {'Speaker of "Vulkan from a Student / Researcher\'s Perspective"'}
            </TrWithDate>
          </Tbody>
        </Table>
      </Box>

      <Box mt={8}>
        <SectionTitle>資格・受賞など</SectionTitle>
        <Table variant={"unstyled"} placement="bottom">
          <Tbody>
            <TrWithDate date={"2017/02"}>
              DHU U-18アーティストコンテストCG部門優秀賞
            </TrWithDate>

            <TrWithDate date={"2017/04"}>基本情報技術者試験</TrWithDate>

            <TrWithDate date={"2018/12"}>
              CGエンジニア検定エキスパート
            </TrWithDate>

            <TrWithDate date={"2018/12"}>
              CGクリエイター検定エキスパート
            </TrWithDate>

            <TrWithDate date={"2019/02"}>
              文部科学大臣賞（CGエンジニア検定満点による）
            </TrWithDate>

            <TrWithDate date={"2022/01"}>
              バンダイナムコ研究所データサイエンスチャレンジ優勝
            </TrWithDate>

            <TrWithDate date={"2022/08"}>
              {"情報処理学会 "}
              <ExternalLink href="https://www.ipsj.or.jp/award/yamashita2022.html#:~:text=%E8%A5%BF%E8%88%98%E3%80%80%E7%A5%90%E6%A8%B9,%E3%81%84%E3%81%9F%E5%AE%9F%E8%A3%85%E2%80%94">
                {"山下記念研究賞"}
              </ExternalLink>
            </TrWithDate>
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
