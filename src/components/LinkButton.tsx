import Link from "next/link";

export const LinkButton = (
  props: {
    title: string;
    text: string;
    href: string;
  } = {
    title: "Title",
    text: "Text",
    href: "#",
  }
) => {
  return (
    <div>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-2xl hover:backdrop-blur"
        href={props.href}
        target="_blank"
      >
        <h3 className="text-2xl font-bold">{props.title}</h3>
        <div className="text-lg">{props.text}</div>
      </Link>
    </div>
  );
};
