import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// single navbar item
export default function NavItem(props) {
  const { children, isLast, to = "/", ...rest } = props;
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <Link href={to} passHref>
      <span className="mr-6 cursor-pointer">{children}</span>
    </Link>
  );
}
