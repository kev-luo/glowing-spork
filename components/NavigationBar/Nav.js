import React, { useState } from "react";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";

import MenuToggle from "./MenuToggle";
import Logo from "./Logo";

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
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Logo />
      <Link href="/" passHref>
        <span>Home</span>
      </Link>
      <Link href="/create-post" passHref>
        <span>Create Post</span>
      </Link>
      <Link href="/profile" passHref>
        <span>Profile</span>
      </Link>
      {/* {props.signedInUser && (
        <Link href="/my-posts" passHref>
          <span>My Posts</span>
        </Link>
      )} */}
    </Flex>
  );
}
