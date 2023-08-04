import Link from "next/link";

export const NavigationLink = (props: { href: string; text: string }) => {
  return (
    <Link
      href={props.href}
      className="m-2 flex max-w-xs cursor-pointer flex-col gap-4 rounded-xl p-4 text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg hover:backdrop-blur"
    >
      <h3 className="text-lg">{props.text}</h3>
    </Link>
  );
};
