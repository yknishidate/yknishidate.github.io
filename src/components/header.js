import * as React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
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
          <Heading as="h4" size="md">
            Nishiki
          </Heading>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
