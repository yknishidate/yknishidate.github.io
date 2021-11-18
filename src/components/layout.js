import * as React from "react";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "@fontsource/noto-sans-jp";
import Header from "../components/header";
import Footer from "./footer";

const extensions = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP",
  },
};

const theme = extendTheme({ extensions });

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.md" pt={24}>
        {children}
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default Layout;
