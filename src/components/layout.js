import * as React from "react"
import { ChakraProvider, Container } from "@chakra-ui/react"
import "@fontsource/noto-sans-jp"
import theme from "../pages/theme"
import "./base.css"

import Header from "../components/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.sm" pt={24}>
        {children}
        <Footer />
      </Container>
    </ChakraProvider>
  )
}

export default Layout
