import { PropsWithChildren } from "react";

export const PageContentBox = (
  props: {
    title: string;
  } & PropsWithChildren
) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur-sm">
      {props.title ? (
        <h3 className="text-2xl font-bold">{props.title}</h3>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  );
};
