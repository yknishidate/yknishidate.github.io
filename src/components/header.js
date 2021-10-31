import * as React from "react";
import {
  Box,
  Container,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "gatsby";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
        maxW="container.sm"
        wrap="wrap"
        align="center"
        justify="space-between"
        alignItems={"center"}
      >
        <Link to="/">
          <Heading size="md">Nishiki</Heading>
        </Link>
        <Spacer />
        <IconButton
          _focus={{ _focus: "none" }}
          size="md"
          aria-label="DarkMode Switch"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Container>
    </Box>
  );
};

export default Header;
