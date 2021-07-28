// home page - single post image
export default function PostImage(props) {
  const { label, emoji } = props;
  return (
    <span
      role="img"
      className="text-2xl"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {emoji}
    </span>
  );
}
