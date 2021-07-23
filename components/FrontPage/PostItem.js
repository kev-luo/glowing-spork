import Link from "next/link";

import PostImage from "./PostImage";

export default function PostItem(props) {
  const { post } = props;
  return (
    <li className="mb-3 -mx-2 -my-2">
      <Link href={`/posts/${post.id}`} passHref>
        <a className="p-2 block hover:bg-gray-200">
          <div className="md:flex justify-start items-center">
            <div className="block text-lg">
              <span className="align-middle">{post.title}</span>
            </div>
            <PostImage label={post.postEmojiTitle} emoji={post.postEmoji} />
          </div>
          <div>
            <p className="text-gray-500 mt-2 text-sm mr-2">
              Author: {post.username}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
