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
  const tagColor = useColorModeValue("gray.200", "gray.600");
  const { slug } = product;
  const { title, date, tags, thumb } = product.frontmatter;
  const image = getImage(thumb);

  return (
    <Link to={`/post/${slug}/`}>
      <GridItem bg={bgColor} height={"100%"} rounded={"md"} overflow={"hidden"}>
        <GatsbyImage image={image} />
        <Container py={4}>
          <Text mb={2} color="gray.500">
            {date}
          </Text>
          <Heading size={"md"} fontWeight={"normal"} mb={2}>
            {title}
          </Heading>
          {tags.map((tag) => {
            return (
              <Badge mr={2} bg={tagColor} textTransform={"none"} px={2}>
                {tag}
              </Badge>
            );
          })}
        </Container>
      </GridItem>
    </Link>
  );
};

export default Card;
