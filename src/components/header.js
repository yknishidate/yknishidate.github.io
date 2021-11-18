import * as React from "react";
import {
  Box,
  Container,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";

const Header = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.900");
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      zIndex={1}
      borderBottom={"2px"}
      borderColor={borderColor}
    >
      <Container
        display="flex"
        py={4}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        alignItems={"center"}
      >
        <Link to="/">
          <Heading size="md">Nishiki</Heading>
        </Link>
        <Spacer />
      </Container>
    </Box>
  );
};

export default Header;
