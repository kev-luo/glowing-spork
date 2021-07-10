import React from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NavItem(props) {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to} passHref>
        <span>{children}</span>
      </Link>
    </Text>
  );
}
