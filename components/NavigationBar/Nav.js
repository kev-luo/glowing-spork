import React, { useState } from "react";
import { useCycle } from "framer-motion";

import MenuToggle from "./MenuToggle";
import NavItem from "./NavItem";

// navbar container
export default function Nav(props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { signedInUser, ...rest } = props;
  return (
    <nav className="p-6 border-b border-gray-300">
      <MenuToggle toggle={() => toggleOpen()} />
      <NavItem to="/">Home</NavItem>
      <NavItem to="/create-post">Create Post</NavItem>
      <NavItem to="/profile">Profile</NavItem>
      <NavItem to="/tacocaco">Tacocaco</NavItem>
    </nav>
  );
}
