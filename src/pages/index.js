import * as React from "react"
import {
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import "@fontsource/noto-sans-jp"
import theme from "./theme"

const Header = () => {
  return (
    <Flex mb={16}>
      <Heading size="md">Nishiki</Heading>
    </Flex>
  )
}

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"container.md"} py={4}>
        <Header />
        <Heading mb={4}>Yuki Nishidate</Heading>
        <Text mb={2}>🎓 慶應義塾大学情報工学科 4 年</Text>
        <Text mb={2}>💻 コンピュータグラフィックスが好きです</Text>
      </Container>
    </ChakraProvider>
  )
}

export default Home
