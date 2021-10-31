import * as React from "react";
import { Heading } from "@chakra-ui/react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="404"></Seo>
      <Layout>
        <Heading>404: Page Not Found</Heading>
      </Layout>
    </>
  );
};

export default NotFoundPage;
