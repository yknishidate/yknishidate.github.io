import * as React from "react"
import {
  ChakraProvider,
  Container,
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
import theme from "./theme"

import { SiZenn, SiGithub, SiTwitter } from "react-icons/si"

const Header = () => {
  return (
    <Flex mb={16}>
      <Link to="/">
        <Heading size="md">Nishiki</Heading>
      </Link>

      <Spacer />

      <Box mx={4}>
        <Link to="/about">About</Link>
      </Box>

      <Box>
        <Link to="/posts">Posts</Link>
      </Box>
    </Flex>
  )
}

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
        colorScheme={"orange"}
        leftIcon={<Icon as={icon} />}
      >
        {name}
      </Button>
    </Link>
  )
}

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"container.sm"} py={4}>
        <Header />

        <Flex align={"center"} mb={8}>
          <Box>
            <Heading mb={4}>Yuki Nishidate</Heading>
            <Text mb={2}>🎓 慶應義塾大学 情報工学科 4 年</Text>
            <Text mb={2}>💻 コンピュータグラフィックスを勉強中です</Text>
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

        <Box mb={8}>
          <Heading size="md" mb={4}>
            Lab
          </Heading>
          <Link to="https://fj.ics.keio.ac.jp/">
            🧪{" "}
            <Text as="u" mb={2}>
              Fujishiro LAB
            </Text>
          </Link>
        </Box>
      </Container>
    </ChakraProvider>
  )
}

export default Home
