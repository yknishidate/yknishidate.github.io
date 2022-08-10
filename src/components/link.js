import * as React from "react";
import { Link } from "@chakra-ui/react";

const ExternalLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      isExternal
      fontWeight={"bold"}
      textDecoration={"underline"}
      _focus={{ _focus: "none" }}
      textUnderlineOffset={"0.15em"}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;
