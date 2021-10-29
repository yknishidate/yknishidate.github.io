import * as React from "react"
import { Flex, Heading, Spacer, Text, Center } from "@chakra-ui/react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Center mt={16}>
      <Text color={"gray.500"}>
        © {new Date().getFullYear()} Yuki Nishidate. All Rights Reserved.
      </Text>
    </Center>
  )
}

export default Footer
