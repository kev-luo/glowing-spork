import Link from "next/link";

import PostImage from "./PostImage";

export default function PostItem(props) {
  const { post } = props;
  return (
    <div className="max-w-screen-lg sm:mx-auto">
      <a
        href={`/posts/${post.id}`}
        aria-label=""
        className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50"
      >
        <div className="mb-4 lg:mb-0">
          <h5 className="text-xl font-bold leading-none sm:text-2xl">
            {post.title}
          </h5>
          <div className="relative pr-8">
            <p className="text-sm text-gray-500">{post.username}</p>
          </div>
        </div>
        <div className="flex justify-start w-56 lg:justify-end">
          <div className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            <PostImage label={post.postEmojiTitle} emoji={post.postEmoji} />

            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
