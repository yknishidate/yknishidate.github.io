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
  const tagColor = useColorModeValue("gray.200", "gray.600");
  const { slug } = product;
  const { title, date, tags, thumb } = product.frontmatter;
  const image = getImage(thumb);

  return (
    <Link to={`/post/${slug}/`}>
      <GridItem
        height={"100%"}
        rounded={"md"}
        overflow={"hidden"}
        border={"1px solid #555"}
      >
        <GatsbyImage image={image} />
        <Container py={4}>
          <Text mb={2}>{date}</Text>
          <Heading size={"md"} mb={2}>
            {title}
          </Heading>
          {tags.map((tag) => {
            return (
              <Badge
                mr={2}
                bg={"gray.700"}
                color="gray.200"
                textTransform={"none"}
                px={2}
              >
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
