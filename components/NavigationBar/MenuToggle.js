import React from "react";
import { Box } from "@chakra-ui/react";
import { ImMenu, ImCross } from "react-icons/im";

// toggles visibility of MenuLink component for mobile and tablets
export default function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: "block", md: "none" }} onclick={toggle}>
      {isOpen ? <ImCross /> : <ImMenu />}
    </Box>
  );
}
