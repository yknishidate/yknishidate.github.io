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
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={"background"}
      zIndex={1}
      borderBottom={"2px"}
      borderColor={"shadow"}
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
        <Box mr={8}>
          <Link to="/">Home</Link>
        </Box>
        <Link to="/profile">Profile</Link>
      </Container>
    </Box>
  );
};

export default Header;
