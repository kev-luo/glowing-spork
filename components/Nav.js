import React from "react";
import Link from "next/link";

export default function Nav({ signedInUser }) {
  return (
    <nav>
      <Link href="/" passHref>
        <span>Home</span>
      </Link>
      <Link href="/create-post" passHref>
        <span>Create Post</span>
      </Link>
      <Link href="/profile" passHref>
        <span>Profile</span>
      </Link>
      {/* {signedInUser && (
        <Link href="/my-posts" passHref>
          <span>My Posts</span>
        </Link>
      )} */}
    </nav>
  );
}
