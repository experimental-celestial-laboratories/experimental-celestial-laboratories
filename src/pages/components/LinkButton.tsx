import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export const LinkButton = (
  props: {
    title: string;
    text: string;
  } = {
    title: "Title",
    text: "Text",
  }
) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Link href="#"></Link>
    </div>
  );
};
