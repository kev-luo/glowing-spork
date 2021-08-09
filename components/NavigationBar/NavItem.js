import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// single navbar item
export default function NavItem(props) {
  const { children, to } = props;
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <a
      aria-label="Home"
      title="Home"
      href={to}
      className={`${
        isActive ? "text-purple-400" : ""
      } font-small tracking-wide text-gray-100 transition-colors duration-200 uppercase hover:text-purple-400`}
    >
      <div className="flex items-center relative cursor-pointer whitespace-nowrap">
        {children}
      </div>
    </a>
  );
}
