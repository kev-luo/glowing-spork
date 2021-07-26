import Logo from "../SVG/Logo";
import NavItem from "./NavItem";
import ThemeToggle from "../ThemeToggle";

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
            <ThemeToggle />
            <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <NavItem to="/">Home</NavItem>
              </div>
            </a>
            <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <NavItem to="/create-post">Create</NavItem>
              </div>
            </a>
            <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <NavItem to="/profile">Profile</NavItem>
              </div>
            </a>
            <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <NavItem to="/tacocaco">Tacocaco</NavItem>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
