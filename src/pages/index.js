import * as React from "react"
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Button,
  Box,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/noto-sans-jp"

import { SiZenn, SiGithub, SiTwitter } from "react-icons/si"
import Layout from "../components/layout"

const SocialLink = ({ to, icon, name }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Button
        pl={0}
        pr={8}
        variant="ghost"
        colorScheme={"blue"}
        leftIcon={<Icon as={icon} />}
      >
        {name}
      </Button>
    </a>
  )
}

const Home = () => {
  return (
    <Layout>
      <Box mb={8}>
        <Flex align={"center"} mb={4}>
          <Box>
            <Heading mb={4}>Yuki Nishidate</Heading>
            <Text mb={2}>慶應義塾大学 情報工学科 4 年</Text>
            <Text mb={2}>コンピュータグラフィックスを勉強中です</Text>
          </Box>
          <Spacer />
          <StaticImage
            src={"../images/favicon.png"}
            alt="logo"
            layout="fixed"
            width={100}
            height={100}
            placeholder="none"
          />
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

        <SocialLink to="https://zenn.dev/nishiki" icon={SiZenn} name={"Zenn"} />
      </Box>

      <Accordion allowToggle mb={8}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Bio
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
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
      </Accordion>
    </Layout>
  )
}

export default Home
