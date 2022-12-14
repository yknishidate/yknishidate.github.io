import * as React from "react";
import { Badge } from "@chakra-ui/react";

const Tag = ({ children }) => {
  return (
    <Badge
      mr={2}
      my={1}
      bg={"gray.700"}
      color={"gray.200"}
      textTransform={"none"}
      px={1.5}
      py={0.5}
    >
      {children}
    </Badge>
  );
};

export default Tag;
