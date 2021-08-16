import PostImage from "./PostImage";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function PostItem(props) {
  const { post } = props;
  const returnDate = (postDate) => {
    const date = new Date(postDate);
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    return `${dt} ${month} ${year}`;
  };
  return (
    <a
      href={`/posts/${post.id}`}
      className="py-8 flex flex-wrap flex-col md:flex-row md:flex-nowrap transition duration-300 transform sm:hover:translate-x-4 sm:hover:bg-blue-gray-50 "
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <PostImage label={post.postEmojiTitle} emoji={post.postEmoji} />
        <span className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={post.createdAt}>{returnDate(post.createdAt)}</time>
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-bold leading-8 tracking-tight">
          {post.title}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400">
          {post.username}
        </p>
      </div>
    </a>
  );
}
