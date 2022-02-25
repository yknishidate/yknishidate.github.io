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
  HStack,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { SiZenn, SiGithub, SiTwitter } from "react-icons/si";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SocialLink from "../components/social_link";
import Card from "../components/card";
import Fade from "react-reveal/Fade";

const EmojiBlock = ({ code, children }) => {
  return (
    <HStack mb={2} align="baseline">
      <Box boxSize="1em">
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${code}.svg`}
          display="inline"
        />
      </Box>
      {children}
    </HStack>
  );
};

const EmojiText = ({ code, text }) => {
  return (
    <HStack mb={2} align="baseline">
      <Box boxSize="1em">
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${code}.svg`}
          display="inline"
        />
      </Box>
      <Text lineHeight={"1em"}>{text}</Text>
    </HStack>
  );
};

const ProfilePage = () => {
  return (
    <Layout>
      <Seo />
      <Box mb={8}>
        <Flex align={"top"} mb={16}>
          <Box>
            <VStack mb={8} align={"left"}>
              <Heading size={"xl"}>西舘 祐樹 - Yuki Nishidate</Heading>
            </VStack>
            <Text mb={8}>コンピュータグラフィックスを勉強中の大学生です</Text>

            <Box mb={8}>
              <EmojiBlock code="1f393">
                <Text lineHeight={"1em"}>
                  慶應義塾大学 理工学部 情報工学科4年
                </Text>
              </EmojiBlock>
              <EmojiBlock code="1f4bb">
                <Text lineHeight={"1em"}>
                  R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)
                </Text>
              </EmojiBlock>
              <EmojiBlock code="1f4bb">
                <Text lineHeight={"1em"}>
                  3Dデザイナー @ 家具広告制作会社 (2018)
                </Text>
              </EmojiBlock>
              <EmojiBlock code="1f517">
                <HStack>
                  <Link
                    href="https://twitter.com/yknishidate"
                    isExternal
                    color={"gray.300"}
                    textDecoration="underline"
                  >
                    <Text lineHeight={"1em"}>{"Twitter"}</Text>
                  </Link>
                  <Text lineHeight={"1em"}>{" / "}</Text>
                  <Link
                    href="https://github.com/yknishidate"
                    isExternal
                    color={"gray.300"}
                    textDecoration="underline"
                  >
                    <Text lineHeight={"1em"}>{"GitHub"}</Text>
                  </Link>
                  <Text lineHeight={"1em"}>{" / "}</Text>
                  <Text lineHeight={"1em"}>{"yuki_nishidate[at]keio.jp"}</Text>
                </HStack>
              </EmojiBlock>
            </Box>
          </Box>

          <Spacer />

          <Box display={{ base: "none", sm: "inline" }}>
            <StaticImage
              src={"../images/favicon.png"}
              alt="logo"
              layout="fixed"
              width={150}
              height={150}
              placeholder="none"
            />
          </Box>
        </Flex>

        <Heading size={"lg"} mb={4}>
          活動
        </Heading>
        <Table variant={"unstyled"}>
          {/* <TableCaption
            placement="top"
            color="white"
            borderBottom={"solid 1px white"}
          >
            活動
          </TableCaption> */}
          <Tbody>
            <Tr>
              <Td>2017</Td>
              <Td>DHU U-18アーティストコンテストCG部門優秀賞受賞</Td>
            </Tr>
            <Tr>
              <Td>2018</Td>
              <Td>基本情報技術者試験合格</Td>
            </Tr>
            <Tr>
              <Td>2019</Td>
              <Td>CGエンジニア検定エキスパート合格</Td>
            </Tr>
            <Tr>
              <Td>2019</Td>
              <Td>CGクリエイター検定エキスパート合格</Td>
            </Tr>
            <Tr>
              <Td>2019</Td>
              <Td>文部科学大臣賞受賞（CGエンジニア検定エキスパート満点）</Td>
            </Tr>
            <Tr>
              <Td>2022</Td>
              <Td>バンダイナムコ研究所データサイエンス・チャレンジ優勝</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      {/*       
      <Accordion allowToggle mb={16}>
        <AccordionItem>
          <AccordionButton _focus={{ _focus: "none" }}>
            <Box flex="1" textAlign="left">
              About me
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Table variant={"unstyled"}>
              <TableCaption placement="top" size="md" bg="gray.100">
                学歴
              </TableCaption>
              <Tbody>
                <Tr>
                  <Year year="2018" />
                  <Td>慶應義塾湘南藤沢高等部 卒業</Td>
                </Tr>
                <Tr>
                  <Year year="~2022" />
                  <Td>慶應義塾大学 理工学部 情報工学科 在学中</Td>
                </Tr>
              </Tbody>
            </Table>
            <Table variant={"unstyled"}>
              <TableCaption placement="top" bg="gray.100">
                活動
              </TableCaption>
              <Tbody>
                <Tr>
                  <Year year="2017" />
                  <Td>
                    デジタルハリウッド大学U-18アーティストコンテストCG部門優秀賞受賞
                  </Td>
                </Tr>
                <Tr>
                  <Year year="2018" />
                  <Td>基本情報技術者試験合格</Td>
                </Tr>
                <Tr>
                  <Year year="2019" />
                  <Td>CGエンジニア検定エキスパート合格</Td>
                </Tr>
                <Tr>
                  <Year year="2019" />
                  <Td>CGクリエイター検定エキスパート合格</Td>
                </Tr>
                <Tr>
                  <Year year="2019" />
                  <Td>
                    文部科学大臣賞受賞（CGエンジニア検定エキスパート満点）
                  </Td>
                </Tr>
                <Tr>
                  <Year year="2022" />
                  <Td>バンダイナムコ研究所データサイエンス・チャレンジ優勝</Td>
                </Tr>
              </Tbody>
            </Table>
            <Table variant={"unstyled"}>
              <TableCaption placement="top" bg="gray.100">
                職歴
              </TableCaption>
              <Tbody>
                <Tr>
                  <Year year="2019" />
                  <Td>3Dデザイナー（インターン）@ 家具広告制作会社</Td>
                </Tr>
                <Tr>
                  <Year year="2019-2021" />
                  <Td>
                    R&Dエンジニア（インターン＆アルバイト）@ DIGITAL FRONTIER
                    INC.
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion> */}
    </Layout>
  );
};

export default ProfilePage;
