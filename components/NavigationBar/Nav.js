import Logo from "../SVG/Logo";
import NavItem from "./NavItem";
import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

// navbar container
export default function Nav(props) {
  const { signedInUser } = props;
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      {/* <!-- logo --> */}
      <div className="inline-flex">
        <NavItem to="/">
          <div className="hidden md:block">
            <Logo />
          </div>
        </NavItem>
        <NavItem to="/">
          <div className="block md:hidden">
            <Logo />
          </div>
        </NavItem>
      </div>

      {/* <!-- end logo --> */}

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <Link href="/" passHref>
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/create-post" passHref>
              <NavItem>Create</NavItem>
            </Link>
            <Link href="/profile" passHref>
              <NavItem>Profile</NavItem>
            </Link>
            <Link href="/tacocaco" passHref>
              <NavItem>Tacocaco</NavItem>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 mr-4 mt-6">
        <ThemeToggle />
      </div>
    </nav>
  );
}
