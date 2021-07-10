import React from "react";
import { Box } from "@chakra-ui/react";
import { ImMenu, ImCross } from "react-icons/im";

// toggles visibility of MenuLink component for mobile and tablets
export default function MenuToggle(props) {
  const { toggle, isOpen } = props;
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <ImCross /> : <ImMenu />}
    </Box>
  );
}
