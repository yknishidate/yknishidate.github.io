import * as React from "react";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "@fontsource/m-plus-1";
import Header from "../components/header";
import Footer from "./footer";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowY: "scroll",
        backgroundColor: "#222",
        color: "white",
      },
      h1: {
        pb: 4,
      },
      h2: {
        pb: 4,
      },
      h3: {
        pb: 2,
      },
      p: {
        py: 1,
      },
    },
  },
  fonts: {
    heading: "M PLUS 1",
    body: "M PLUS 1",
  },
  colors: {
    background: "#222",
    shadow: "#111",
    link: "#90CDF4",
  },
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
