import * as React from "react"
import { ChakraProvider, Container } from "@chakra-ui/react"
import "@fontsource/noto-sans-jp"
import theme from "../pages/theme"

import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.sm" py={4}>
        <Header />
        {children}
      </Container>
    </ChakraProvider>
  )
}

export default Layout
