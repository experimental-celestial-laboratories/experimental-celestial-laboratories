import Link from "next/link";
import { Logo } from "./Logo";

export const CornerLogo = () => {
  return (
    <Link className="absolute left-0 top-0 hidden sm:flex" href="/">
      <Logo />
    </Link>
  );
};
