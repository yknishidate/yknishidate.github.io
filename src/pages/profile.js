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

const EmojiBlock = ({ code, children }) => {
  return (
    <HStack mb={4} align="baseline">
      <Box boxSize={"1em"}>
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${code}.svg`}
          display="inline"
        />
      </Box>
      {children}
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
            <Heading size={"xl"} mb={8}>
              西舘 祐樹 / Yuki Nishidate
            </Heading>
            <Text mb={8}>コンピュータグラフィックスを勉強中の大学生です</Text>

            <Box mb={8}>
              <EmojiBlock code="1f393">
                <Text>慶應義塾大学 理工学部 情報工学科4年</Text>
              </EmojiBlock>
              <EmojiBlock code="1f4bb">
                <Text>R&Dエンジニア @ DIGITAL FRONTIER INC. (2019-2021)</Text>
              </EmojiBlock>
              <EmojiBlock code="1f4bb">
                <Text>3Dデザイナー @ 家具広告制作会社 (2018)</Text>
              </EmojiBlock>
              <EmojiBlock code="1f517">
                <HStack>
                  <Link
                    href="https://twitter.com/yknishidate"
                    isExternal
                    color={"gray.300"}
                    textDecoration="underline"
                  >
                    <Text>{"Twitter"}</Text>
                  </Link>
                  <Text>{" / "}</Text>
                  <Link
                    href="https://github.com/yknishidate"
                    isExternal
                    color={"gray.300"}
                    textDecoration="underline"
                  >
                    <Text>{"GitHub"}</Text>
                  </Link>
                  <Text>{" / "}</Text>
                  <Text>{"yuki_nishidate[at]keio.jp"}</Text>
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

        <Heading size={"lg"} mb={8}>
          活動
        </Heading>
        <Table variant={"unstyled"} borderLeft={"solid 1px gray"}>
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
    </Layout>
  );
};

export default ProfilePage;
