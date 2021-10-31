import * as React from "react";
import { Button, Icon } from "@chakra-ui/react";

const SocialLink = ({ to, icon, name }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      <Button
        mr={2}
        mb={2}
        variant="outline"
        colorScheme={"blue"}
        leftIcon={<Icon as={icon} />}
      >
        {name}
      </Button>
    </a>
  );
};

export default SocialLink;
