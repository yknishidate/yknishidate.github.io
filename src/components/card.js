import * as React from "react";
import {
  Heading,
  Text,
  GridItem,
  Container,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Card = ({ product }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const { slug } = product;
  const { title, date, tags, thumb } = product.frontmatter;
  const image = getImage(thumb);

  return (
    <Link to={`/post/${slug}/`}>
      <GridItem bg={bgColor} height={"100%"} rounded={"md"} overflow={"hidden"}>
        <GatsbyImage image={image} />
        <Container py={4}>
          <Heading size={"md"} fontWeight={"normal"} pb={2}>
            {title}
          </Heading>
          {tags.map((tag) => {
            return <Badge mr={2}>{tag}</Badge>;
          })}
          <Text>{date}</Text>
        </Container>
      </GridItem>
    </Link>
  );
};

export default Card;
