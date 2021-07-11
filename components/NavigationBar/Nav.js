import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import NavItem from "./NavItem";
import DarkModeSwitch from "../DarkModeSwitch";

export default function Nav(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/create-post">Create Post</NavItem>
          <NavItem to="/profile">Profile</NavItem>
          <DarkModeSwitch />
        </Flex>
      </Box>

      {/* {props.signedInUser && (
        <Link href="/my-posts" passHref>
          <span>My Posts</span>
        </Link>
      )} */}
    </Flex>
  );
}
