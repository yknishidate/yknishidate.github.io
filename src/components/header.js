import * as React from "react"
import { Flex, Heading, Spacer, Box } from "@chakra-ui/react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Flex mb={16} py={4}>
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

export default Header
