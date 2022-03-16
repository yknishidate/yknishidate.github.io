import * as React from "react";
import { Heading, Text, GridItem, Container, Badge } from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Card = ({ product }) => {
  const { slug } = product;
  const { title, date, tags, thumb } = product.frontmatter;
  const image = getImage(thumb);

  return (
    <Link to={`/post/${slug}/`}>
      <GridItem
        height={"100%"}
        rounded={"lg"}
        overflow={"hidden"}
        bgColor={"#282828"}
      >
        <GatsbyImage image={image} objectFit={"cover"} />
        <Container py={4}>
          <Text>{date}</Text>
          <Heading as={"h3"} size={"md"}>
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
