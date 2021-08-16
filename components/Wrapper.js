// import { mergeClasses } from "../lib/utils";
import SectionContainer from "./SectionContainer";
import Navbar from "./NavigationBar/Navbar";

export default function Wrapper({ children, className }) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="mb-auto">{children}</main>
      </div>
    </SectionContainer>
  );
}
