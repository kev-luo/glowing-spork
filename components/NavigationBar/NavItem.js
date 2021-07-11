import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem(props) {
  const { children, isLast, to = "/", ...rest } = props;
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <Link href={to} passHref>
      <ChakraLink
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        borderBottom={isActive ? "1px" : "0px"}
        _hover={{ borderBottom: "1px", cursor: "pointer" }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}
