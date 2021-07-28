import PostImage from "./PostImage";

export default function PostItem(props) {
  const { post } = props;
  return (
    <div className="max-w-screen-lg sm:mx-auto">
      <a
        href={`/posts/${post.id}`}
        aria-label=""
        className="flex flex-col justify-between items-start py-4 transition duration-300 transform rounded sm:px-4 sm:flex-row sm:hover:translate-x-4 sm:hover:bg-blue-gray-50"
      >
        <div className="mb-4 lg:mb-0">
          <h5 className="text-xl font-bold leading-none sm:text-2xl dark:text-white">
            {post.title}
          </h5>
          <div className="relative pr-8">
            <p className="text-sm text-gray-500">{post.username}</p>
          </div>
        </div>
        <div className="flex justify-start w-56 sm:justify-end">
          <div className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            <PostImage label={post.postEmojiTitle} emoji={post.postEmoji} />
          </div>
        </div>
      </a>
    </div>
  );
}
