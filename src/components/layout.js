import * as React from "react";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "@fontsource/m-plus-1"
import Header from "../components/header";
import Footer from "./footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowY: "scroll",
        backgroundColor: "gray.900",
        color: "white",
      },
    },
  },
  fonts: {
    heading: "M PLUS 1",
    body: "M PLUS 1",
  },
  colors: {
    background: 'gray.900',
    shadow: '#0a0a0a'
  }
});

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.md" pt={32} minH={"100vh"}>
        {children}
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default Layout;
