import CustomLink from "../CustomLink";
import { useRouter } from "next/router";

// single navbar item
export default function NavItem(props) {
  const { href, title } = props;
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <CustomLink
      aria-label={title}
      title={title}
      href={href}
      className={`p-1 sm:p-4 dark:text-gray-100 font-small tracking-wide text-gray-900 transition-colors duration-200 uppercase hover:text-purple-400 ${
        isActive ? "text-purple-400 dark:text-purple-400 " : ""
      } `}
    >
      {title}
    </CustomLink>
  );
}
