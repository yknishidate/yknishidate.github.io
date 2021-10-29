import * as React from "react"
import { ChakraProvider, Container } from "@chakra-ui/react"
import "@fontsource/noto-sans-jp"
import theme from "../pages/theme"

import Header from "../components/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm">
        <Header />
        {children}
        <Footer />
      </Container>
    </ChakraProvider>
  )
}

export default Layout
