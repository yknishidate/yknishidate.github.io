import * as React from "react";
import { Text, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center my={16}>
      <Text color={"gray.500"}>
        © {new Date().getFullYear()} - Yuki Nishidate
      </Text>
    </Center>
  );
};

export default Footer;
