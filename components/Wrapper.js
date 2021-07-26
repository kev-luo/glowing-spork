import { mergeClasses } from "../lib/utils";

export default function Wrapper({ children, className }) {
  return (
    <div
      className={mergeClasses(
        "mx-auto p-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white dark:bg-black transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
