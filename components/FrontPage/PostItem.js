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
      className="py-8 flex flex-wrap md:flex-nowrap transition duration-300 transform sm:hover:translate-x-4 sm:hover:bg-blue-gray-50"
    >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <PostImage label={post.postEmojiTitle} emoji={post.postEmoji} />
        <span className="mt- text-gray-500 text-sm">
          {returnDate(post.createdAt)}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-1">
          {post.title}
        </h2>
        <p className="text-gray-500">{post.username}</p>
      </div>
    </a>
  );
}
