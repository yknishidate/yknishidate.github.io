import * as React from "react"
import { Text, Center } from "@chakra-ui/react"

const Card = ({ title, thumb, tags }) => {
  return (
    <Center my={16}>
      <Text color={"gray.500"}>
        © {new Date().getFullYear()} Yuki Nishidate. All Rights Reserved.
      </Text>
    </Center>
  )
}

export default Card
