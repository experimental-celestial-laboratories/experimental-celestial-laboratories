import { NavigationLink } from "./NavigationLink";

export const NavigationBar = () => {
  return (
    <div className="flex">
      <NavigationLink href="/" text="Home" />
      <NavigationLink href="/about" text="Our Mission" />
    </div>
  );
};
