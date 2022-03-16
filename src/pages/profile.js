import * as React from "react";
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  HStack,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faBriefcase,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const ProfilePage = () => {
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

            <Box mb={8}>
              <Text>
                <Box color={"blue.300"} display={"inline"} mr={2}>
                  <FontAwesomeIcon icon={faBuildingColumns} fixedWidth={true} />
                </Box>
                慶應義塾大学 理工学部 情報工学科4年
              </Text>
              <Text>
                <Box color={"blue.300"} display={"inline"} mr={2}>
                  <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
                </Box>
                R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)
              </Text>
              <Text>
                <Box color={"blue.300"} display={"inline"} mr={2}>
                  <FontAwesomeIcon icon={faBriefcase} fixedWidth={true} />
                </Box>
                3Dデザイナー @ 家具広告制作会社 (2018)
              </Text>
              <Text>
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
      <Box mb={16}>
        <Heading as={"h2"} size={"lg"}>
          活動
        </Heading>
        <Table variant={"unstyled"} borderLeft={"solid 1px gray"}>
          <Tbody>
            <Tr>
              <Td px={4} py={2}>
                2017
              </Td>
              <Td px={4} py={2}>
                DHU U-18アーティストコンテストCG部門優秀賞受賞
              </Td>
            </Tr>
            <Tr>
              <Td px={4} py={2}>
                2018
              </Td>
              <Td px={4} py={2}>
                基本情報技術者試験合格
              </Td>
            </Tr>
            <Tr>
              <Td px={4} py={2}>
                2019
              </Td>
              <Td px={4} py={2}>
                CGエンジニア検定エキスパート合格
              </Td>
            </Tr>
            <Tr>
              <Td px={4} py={2}>
                2019
              </Td>
              <Td px={4} py={2}>
                CGクリエイター検定エキスパート合格
              </Td>
            </Tr>
            <Tr>
              <Td px={4} py={2}>
                2019
              </Td>
              <Td px={4} py={2}>
                文部科学大臣賞受賞（CGエンジニア検定満点）
              </Td>
            </Tr>
            <Tr>
              <Td px={4} py={2}>
                2022
              </Td>
              <Td px={4} py={2}>
                バンダイナムコ研究所データサイエンスチャレンジ優勝
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      {/* section */}
      <Box>
        <Heading as={"h2"} size={"lg"}>
          発表
        </Heading>
        <Table variant={"unstyled"} borderLeft={"solid 1px gray"}>
          <Tbody>
            <Tr>
              <Td px={4} py={2}>
                2022
              </Td>
              <Td px={4} py={2}>
                <u>西舘祐樹</u>
                ，藤代一成：「高速プライマリレイ走査のためのアフィン変換レイアライメント」，情報処理学会第84回全国大会，6ZF-01，
                <b>学生奨励賞</b>
              </Td>
            </Tr>

            <Tr>
              <Td px={4} py={2}>
                2022
              </Td>
              <Td px={4} py={2}>
                <u>西舘祐樹</u>
                ，藤代一成：「プライマリレイ走査高速化のためのアフィン変換レイアライメント―Embreeを用いた実装―」，情報処理学会研究速報，Vol.
                2022-CG-185
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
};

export default ProfilePage;
