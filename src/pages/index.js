import * as React from "react"
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Button,
  Box,
  Icon,
  VStack,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/noto-sans-jp"

import { SiZenn, SiGithub, SiTwitter } from "react-icons/si"
import Layout from "../components/layout"

const SocialLink = ({ to, icon, name }) => {
  return (
    // <HStack align={"center"}>
    //   <Icon as={icon} boxSize={5} />
    //   <Link to={to}>
    //     <Text as="u">{name}</Text>
    //   </Link>
    // </HStack>

    <Link to={to}>
      <Button
        p={0}
        variant="ghost"
        colorScheme={"blue"}
        leftIcon={<Icon as={icon} />}
      >
        {name}
      </Button>
    </Link>
  )
}

const Home = () => {
  return (
    <Layout>
      <Flex align={"center"} mb={8}>
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

      <Box mb={8}>
        <Heading size="md" mb={4}>
          Social
        </Heading>

        <List>
          <ListItem>
            <SocialLink
              to="https://twitter.com/yknsdt/"
              icon={SiTwitter}
              name={"Twitter"}
            />
          </ListItem>

          <ListItem>
            <SocialLink
              to="https://github.com/nishidate-yuki"
              icon={SiGithub}
              name={"GitHub"}
            />
          </ListItem>

          <ListItem>
            <SocialLink
              to="https://zenn.dev/nishiki"
              icon={SiZenn}
              name={"Zenn"}
            />
          </ListItem>
        </List>
      </Box>
    </Layout>
  )
}

export default Home
