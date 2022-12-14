import * as React from "react";
import {
  Heading,
  Text,
  GridItem,
  Container,
  HStack,
  Box,
} from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Tag from "./tag";

const Card = ({ product }) => {
  const { slug } = product;
  const { title, date, tags, thumb } = product.frontmatter;
  const image = getImage(thumb);

  return (
    <Link to={`/post/${slug}/`}>
      <GridItem>
        <HStack
          height={"100%"}
          bgColor={"#282828"}
          alignItems={"top"}
          rounded={"8px"}
          overflow={"hidden"}
        >
          <GatsbyImage
            image={image}
            alt={"image"}
            imgStyle={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          />
          <Container p={2}>
            <Text>{date}</Text>
            <Heading as={"h3"} size={"md"}>
              {title}
            </Heading>
            <Box py={1}>
              {tags.map((tag) => {
                return <Tag>{tag}</Tag>;
              })}
            </Box>
          </Container>
        </HStack>
      </GridItem>
    </Link>
  );
};

export default Card;
