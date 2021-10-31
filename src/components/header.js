import * as React from "react";
import { Box, Container, Flex, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={"gray.800"}
      zIndex={1}
      borderBottom={"2px"}
      borderColor={"gray.900"}
    >
      <Container
        display="flex"
        py={4}
        maxW="container.sm"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Link to="/">
          <Heading size="md">Nishiki</Heading>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;
