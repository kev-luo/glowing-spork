import CustomLink from "../CustomLink";
import Logo from "../SVG/Logo";
import ThemeToggle from "../ThemeToggle";
import MobileNav from "./MobileNav";
import navLinkTitles from "../../data/navLinkTitles";
import { siteMetadata } from "../../data/siteMetadata";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <CustomLink href="/" passHref>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </CustomLink>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden md:block">
          {navLinkTitles.map((link, index) => (
            <NavItem key={index} href={link.href} title={link.title} />
          ))}
        </div>
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
