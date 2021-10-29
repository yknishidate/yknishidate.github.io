import * as React from "react"
import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <Heading textAlign={"center"} mb={4}>
        404: Page Not Found
      </Heading>
    </Layout>
  )
}

export default NotFoundPage
