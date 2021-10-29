import * as React from "react"
import { Box, Container, Flex, Spacer, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        px={0}
        py={4}
        maxW="container.sm"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
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
      </Container>
    </Box>
  )
}

export default Header
