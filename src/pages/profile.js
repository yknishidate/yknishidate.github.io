import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Tbody,
  TableCaption,
  Tr,
  Td,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { SiZenn, SiGithub, SiTwitter } from "react-icons/si";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SocialLink from "../components/social_link";
import Card from "../components/card";
import Fade from "react-reveal/Fade";

const ProfilePage = () => {

  return (
    <Layout>
      <Seo />
      <Text>
          profile page
      </Text>
    </Layout>
  );
};

export default ProfilePage;
